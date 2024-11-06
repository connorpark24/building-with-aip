// Home Component
"use client";

import { useState } from "react";
import Button from "@/components/Button";
import { getRepos } from "@/actions/getRepos";

interface Repo {
    id: string;
    name: string;
    newDescription: string;
    updatedAt: string;
    pushedAt: string;
    url: string;
    isPrivate: boolean;
    languageName: string;
}


export default function Home() {
  const [repos, setRepos] = useState<Repo[]>([]);

  const loadRepos = async () => {
    const data = await getRepos();
    const sortedRepos = data.data.sort((a: Repo, b: Repo) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime());
    setRepos(sortedRepos);
  };

  return (
    <div className="h-screen p-8">
      <div className="flex flex-row gap-x-4 h-full">
        <div className="border border-neutral-300 rounded-sm p-8 h-full w-1/2 bg-white shadow-sm">
          <h1 className="text-neutral-900 text-3xl tracking-tighter leading-11">
            Generating Repository Descriptions Using AIP
          </h1>
          <p className="text-sm mt-1 tracking-tight">
            Connor Park, University of Michigan
          </p>
          <p className="text-sm tracking-tight">cmpark@umich.edu</p>
          <div className="flex flex-col gap-y-1.5 text-sm mt-4 mb-4">
            <p className="text-neutral-800 leading-5 tracking-tight flex flex-row gap-x-2 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.25"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
                />
              </svg>
              Data connection to Github
            </p>
            <p className="text-neutral-800 leading-5 tracking-tight flex flex-row gap-x-2 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.25"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
                />
              </svg>
              Pipeline to generate concise descriptions using GPT-4
            </p>
            <p className="text-neutral-800 leading-5 tracking-tight flex flex-row gap-x-2 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5.25 14.25h13.5m-13.5 0a3 3 0 0 1-3-3m3 3a3 3 0 1 0 0 6h13.5a3 3 0 1 0 0-6m-16.5-3a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3m-19.5 0a4.5 4.5 0 0 1 .9-2.7L5.737 5.1a3.375 3.375 0 0 1 2.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 0 1 .9 2.7m0 0a3 3 0 0 1-3 3m0 3h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Zm-3 6h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Z"
                />
              </svg>
              Fetch objects using the Ontology SDK
            </p>
          </div>
          <Button text="Load Repositories" handleClick={loadRepos} />
        </div>

        <div className="flex flex-col gap-y-2 h-full w-1/2 overflow-y-scroll">
          {repos.map((repo) => (
            <a
              key={repo.id}
              className="border border-neutral-300 rounded-sm p-4 bg-white shadow-sm hover:bg-neutral-100"
              href={repo.url}
            >
              <div className="flex flex-row justify-between">
                <h1 className="text-neutral-900 text-2xl tracking-tighter leading-11">
                  {repo.name || "Unnamed Repo"}
                </h1>

                {repo.isPrivate && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                    />
                  </svg>
                )}
              </div>

              <p className="text-sm mt-1 tracking-tight">
                {repo.newDescription || "No description available"}
              </p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
