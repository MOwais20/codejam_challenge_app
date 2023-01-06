import React, { useState } from "react";
import Heart from "react-heart";

export default function LikeButton() {
  const [active, setActive] = useState(false);
  return (
    <div style={{ width: "1.2rem" }} className="mx-4 ">
      <Heart isActive={active} onClick={() => setActive(!active)} />
    </div>
  );
}
