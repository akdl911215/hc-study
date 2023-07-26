"use client";

import { useState } from "react";

function MyButton() {
  return <button>I`m a button</button>;
}

function AlertButton() {
  function handleClick() {
    alert("You clicked me!");
  }

  return <button onClick={handleClick}>Click me</button>;
}

function AddButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return <button onClick={handleClick}>Clicked {count} times</button>;
}

export default function MyApp() {
  const user = {
    name: "Hedy Lamarr",
    imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
    imageSize: 90,
  };

  const products = [
    { title: "Cabbage", id: 1, isFruit: false },
    { title: "Garlic", id: 2, isFruit: false },
    { title: "Apple", id: 3, isFruit: true },
  ];

  const listItems = products.map((product) => (
    <li
      key={product.id}
      style={{ color: product.isFruit ? "magenta" : "darkgreen" }}
    >
      {product.title}
    </li>
  ));

  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton />
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={"Photo of " + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize,
        }}
      />
      <ul>{listItems}</ul>
      <AlertButton />
      <AddButton />
      <AddButton />
    </div>
  );
}
