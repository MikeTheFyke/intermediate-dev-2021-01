import React from 'react';

interface UserData {
  repoName: string;
}

export default function FetchUserData({ repoName }: UserData) {
  return (
    <>
      <p>{repoName}</p>
    </>
  );
}
