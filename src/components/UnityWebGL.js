'use client';

import { useEffect, useRef, useState } from 'react';
import { Unity, useUnityContext } from 'react-unity-webgl';

export default function UnityWebGL({
  loaderUrl,
  dataUrl,
  frameworkUrl,
  codeUrl,
  className = "",
  width = "100%",
  height = "600px"
}) {
  const { unityProvider, isLoaded, loadingProgression } = useUnityContext({
    loaderUrl: loaderUrl,
    dataUrl: dataUrl,
    frameworkUrl: frameworkUrl,
    codeUrl: codeUrl,
  });

  const loadingPercentage = Math.round(loadingProgression * 100);

  return (
    <div className={`relative ${className}`}>
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-green-50 rounded-lg">
          <div className="text-center">
            <div className="w-48 h-2 bg-green-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-green-darker transition-all duration-300"
                style={{ width: `${loadingPercentage}%` }}
              />
            </div>
            <p className="mt-4 text-sm text-green-700">
              Carregando... {loadingPercentage}%
            </p>
          </div>
        </div>
      )}
      <Unity
        unityProvider={unityProvider}
        style={{
          width: width,
          height: height,
          visibility: isLoaded ? "visible" : "hidden"
        }}
        className="rounded-lg"
      />
    </div>
  );
}
