"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface SpotifyData {
  isPlaying: boolean;
  title: string | null;
  artist: string | null;
  album: string | null;
  albumImageUrl: string | null;
  songUrl: string | null;
}

export default function SpotifyWidget() {
  const [data, setData] = useState<SpotifyData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchSpotify() {
      try {
        const res = await fetch("/api/spotify");
        const json = await res.json();
        setData(json);
      } catch (error) {
        console.error("Failed to fetch Spotify data:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchSpotify();
    // Refresh every 30 seconds
    const interval = setInterval(fetchSpotify, 30000);
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center gap-4 px-4 py-2.5 border border-neutral-700 rounded-full">
        <div className="w-10 h-10 rounded-full bg-neutral-800 animate-pulse" />
        <div className="flex flex-col gap-1">
          <div className="w-24 h-4 bg-neutral-800 rounded animate-pulse" />
          <div className="w-16 h-3 bg-neutral-800 rounded animate-pulse" />
        </div>
      </div>
    );
  }

  if (!data || !data.title) {
    return (
      <div className="flex items-center gap-4 px-4 py-2.5 border border-neutral-700 rounded-full hover:bg-white/5 transition-colors">
        <div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center">
          <svg className="w-5 h-5 text-neutral-500" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
          </svg>
        </div>
        <div className="flex flex-col min-w-0">
          <span className="text-neutral-400 text-sm">Not playing</span>
          <span className="text-neutral-500 text-xs">Spotify</span>
        </div>
        <div className="w-8 h-8 rounded-full bg-[#1DB954] flex items-center justify-center ml-2">
          <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
          </svg>
        </div>
      </div>
    );
  }

  return (
    <a
      href={data.songUrl || "#"}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-4 px-4 py-2.5 border border-neutral-700 rounded-full hover:bg-white/5 hover:border-neutral-500 transition-all"
    >
      {/* Album Art */}
      <div className="w-10 h-10 rounded-full overflow-hidden bg-neutral-700 flex-shrink-0">
        {data.albumImageUrl ? (
          <Image
            src={data.albumImageUrl}
            alt={data.album || "Album Art"}
            width={40}
            height={40}
            className="w-full h-full object-cover"
            unoptimized
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <svg className="w-5 h-5 text-neutral-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
            </svg>
          </div>
        )}
      </div>

      {/* Track Info */}
      <div className="flex flex-col min-w-0 max-w-[140px]">
        <span className="text-white font-medium text-sm truncate">{data.title}</span>
        <span className="text-neutral-400 text-xs truncate">{data.artist}</span>
        <span className="text-neutral-500 text-xs truncate uppercase">{data.album}</span>
      </div>

      {/* Icons */}
      <div className="flex items-center gap-2 ml-2">
        {/* Playing indicator or clock */}
        {data.isPlaying ? (
          <div className="flex items-end gap-0.5 h-4 px-2">
            <span className="w-1 bg-[#1DB954] rounded-full animate-soundbar-1"></span>
            <span className="w-1 bg-[#1DB954] rounded-full animate-soundbar-2"></span>
            <span className="w-1 bg-[#1DB954] rounded-full animate-soundbar-3"></span>
            <span className="w-1 bg-[#1DB954] rounded-full animate-soundbar-4"></span>
          </div>
        ) : (
          <div className="w-8 h-8 rounded-full bg-neutral-700/50 flex items-center justify-center">
            <svg className="w-4 h-4 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        )}
        {/* Spotify Icon */}
        <div className="w-8 h-8 rounded-full bg-[#1DB954] flex items-center justify-center">
          <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
          </svg>
        </div>
      </div>
    </a>
  );
}
