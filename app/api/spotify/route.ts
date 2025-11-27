import { NextResponse } from "next/server";

const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");
const TOKEN_ENDPOINT = "https://accounts.spotify.com/api/token";
const NOW_PLAYING_ENDPOINT =
  "https://api.spotify.com/v1/me/player/currently-playing";
const RECENTLY_PLAYED_ENDPOINT =
  "https://api.spotify.com/v1/me/player/recently-played?limit=1";

async function getAccessToken() {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: refresh_token || "",
    }),
  });

  return response.json();
}

async function getNowPlaying() {
  const { access_token } = await getAccessToken();

  const response = await fetch(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
    next: { revalidate: 30 },
  });

  if (response.status === 204 || response.status > 400) {
    return null;
  }

  return response.json();
}

async function getRecentlyPlayed() {
  const { access_token } = await getAccessToken();

  const response = await fetch(RECENTLY_PLAYED_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
    next: { revalidate: 30 },
  });

  if (response.status === 204 || response.status > 400) {
    return null;
  }

  return response.json();
}

export async function GET() {
  try {
    const nowPlaying = await getNowPlaying();

    if (nowPlaying && nowPlaying.item) {
      const track = nowPlaying.item;
      return NextResponse.json({
        isPlaying: nowPlaying.is_playing,
        title: track.name,
        artist: track.artists.map((artist: { name: string }) => artist.name).join(", "),
        album: track.album.name,
        albumImageUrl: track.album.images[0]?.url,
        songUrl: track.external_urls.spotify,
      });
    }

    // If nothing is currently playing, get recently played
    const recentlyPlayed = await getRecentlyPlayed();

    if (recentlyPlayed && recentlyPlayed.items && recentlyPlayed.items.length > 0) {
      const track = recentlyPlayed.items[0].track;
      return NextResponse.json({
        isPlaying: false,
        title: track.name,
        artist: track.artists.map((artist: { name: string }) => artist.name).join(", "),
        album: track.album.name,
        albumImageUrl: track.album.images[0]?.url,
        songUrl: track.external_urls.spotify,
      });
    }

    return NextResponse.json({
      isPlaying: false,
      title: null,
      artist: null,
      album: null,
      albumImageUrl: null,
      songUrl: null,
    });
  } catch (error) {
    console.error("Spotify API error:", error);
    return NextResponse.json(
      { error: "Failed to fetch Spotify data" },
      { status: 500 }
    );
  }
}
