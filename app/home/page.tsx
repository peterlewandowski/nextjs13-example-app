import React, { Suspense } from "react";
import Counter from "./Counter";
import List from "./List";
import Logo from "./Logo";

export default function HomePage() {
  return (
    <>
      <h1>
        HomePage
        <hr />
        <Suspense fallback={"Loading the list..."}>

        <List />
        </Suspense>
        {/* <Logo />
        <hr />
        <Counter /> */}
      </h1>
    </>
  );
}
