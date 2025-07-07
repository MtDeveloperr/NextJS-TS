// app/EmotionRegistry.tsx
'use client';
import { CacheProvider } from '@emotion/react';
import { useServerInsertedHTML } from 'next/navigation';
import createEmotionCache from '../lib/createEmotionCache';

const cache = createEmotionCache();

export default function EmotionRegistry({ children }: { children: React.ReactNode }) {
  useServerInsertedHTML(() => (
    <style
      data-emotion={`${cache.key} ${Object.keys(cache.inserted).join(' ')}`}
      dangerouslySetInnerHTML={{ __html: Object.values(cache.inserted).join('') }}
    />
  ));
  return <CacheProvider value={cache}>{children}</CacheProvider>;
}
