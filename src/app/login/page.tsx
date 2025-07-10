"use client";

import { useEffect, useState } from "react";
import { getProviders, signIn } from "next-auth/react";
import { ClientSafeProvider } from "next-auth/react";

export default function Login() {
  const [providers, setProviders] = useState<Record<string, ClientSafeProvider> | null>(null);

  useEffect(() => {
    const loadProviders = async () => {
      const res = await getProviders();
      setProviders(res);
    };
    loadProviders();
  }, []);

  return (
    <div className="flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            アカウントにログイン
          </h2>
        </div>
        <div className="mt-8 space-y-6">
          {providers &&
            Object.values(providers).map((provider) => (
              <div key={provider.id} className="text-center">
                <button
                  onClick={() => signIn(provider.id, {callbackUrl: "/"})}
                  className="bg-gray-900 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded flex items-center justify-center w-full"
                >
                  <svg
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 mr-2"
                    fill="currentColor"
                  >
                    <title>GitHub icon</title>
                    <path d="M12 0C5.373 0 0 5.373 0 12c0..." />
                  </svg>
                  <span>GitHubでログイン</span>
                </button>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
