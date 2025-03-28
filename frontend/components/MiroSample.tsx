import React from "react";
import Image from "next/image";
import congratulations from "@/assets/congratulations.png";
import { SDKUsageDemo } from "@/components/SDKUsageDemo";
// import APIUsageDemo from './APIUsageDemo';
import "@/assets/style.css";

export default function MiroSample() {
  return (
    <div className="grid">
      <div className="cs1 ce12">
        <Image src={congratulations} alt="" />
        <h1>Congratulations!</h1>
        <p>You&apos;ve just created your first Miro app!</p>
      </div>
      <div className="cs1 ce12">
        <SDKUsageDemo />
      </div>
      <hr className="cs1 ce12" />
      <div className="cs1 ce12">{/* <APIUsageDemo /> */}</div>
      <hr className="cs1 ce12" />
      <div className="cs1 ce12">
        <p>
          To explore more and build your own app, see the Miro Developer Platform
          documentation.
        </p>
        <a
          className="button button-secondary"
          target="_blank"
          href="https://developers.miro.com"
        >
          Read the documentation
        </a>
      </div>
    </div>
  );
}
