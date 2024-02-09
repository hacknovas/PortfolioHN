import Image from "next/image";
import "@/app/CSS/header.css";

export default function Header() {
  return (
    <div className="" id="setImage">
      <div id="imageset" ></div>
      <div className="text-light d-flex justify-content-between ">
        <div className="p-3">Prathamesh Doni</div>
        <div className="d-flex">
          <div className="p-3">About</div>
          <div className="p-3">Skills</div>
          <div className="p-3">Projects</div>
          <div className="p-3">Qualification</div>
        </div>
      </div>
    </div>
  );
}
