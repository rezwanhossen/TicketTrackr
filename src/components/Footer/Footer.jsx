import React from "react";
import { Facebook, Instagram, Linkedin, X } from "lucide-react";

const Footer = () => {
  return (
    <div className="bg-[#000000]">
      <footer className="footer sm:footer-horizontal  text-base-content p-10">
        <aside>
          <h1 className="text-2xl md:text-5xl mb-4">TicketTrackr</h1>
          <p>
            TicketTracker is a modern Customer Support <br /> Zone that helps
            teams efficiently manage <br /> customer tickets, track issue
            progress, and <br /> resolve requests smoothly.
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About Us</a>
          <a className="link link-hover">Our Mission</a>
          <a className="link link-hover">Contact Saled</a>
        </nav>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Products & Services</a>
          <a className="link link-hover">Customer Stories</a>
          <a className="link link-hover">Download Apps</a>
        </nav>
        <nav>
          <h6 className="footer-title">Information</h6>
          <a className="link link-hover">Privacy Policy</a>
          <a className="link link-hover">Terms & Conditions</a>
          <a className="link link-hover">Join Us</a>
        </nav>
        <nav>
          <h6 className="footer-title">Social Links</h6>
          <p className="link link-hover flex items-center gap-2 ">
            <Facebook /> @TicketTrackr123
          </p>
          <p className="link link-hover flex items-center gap-2 ">
            <Instagram /> @TicketTrackr123
          </p>
          <p className="link link-hover flex items-center gap-2 ">
            <X /> @TicketTrackr123
          </p>
          <p className="link link-hover flex items-center gap-2 ">
            <Linkedin /> @TicketTrackr123
          </p>
        </nav>
      </footer>
      <footer className="footer sm:footer-horizontal footer-center  text-base-content p-4">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by
            rezwan hossen
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
