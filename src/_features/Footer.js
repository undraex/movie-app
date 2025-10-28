import { EmailIcon } from "@/_icons/EmailIcon";
import { FilmIconWhite } from "@/_icons/FilmIconWhite";
import { PhoneIcon } from "@/_icons/PhoneIcon";

export default function Footer() {
  return (
    <div className="flex h-[280px] w-full bg-indigo-700 mt-[52px] justify-center items-center">
      <div className="w-[1440px] h-[200px] flex justify-between">
        <div className="flex flex-col h-[59px] gap-[12px]">
          <FilmIconWhite className="text-white" />
          <p className="text-white inter font-sm">
            © 2024 Movie Z. All Rights Reserved.
          </p>
        </div>

        <div className="flex gap-[96px] ">
          <div className="flex gap-[12px]">
            <div className="flex gap-[12px] flex-col">
              <p className="font-sm text-white">Contact Information</p>
              <div className="flex gap-[12px] items-center">
                <EmailIcon />
                <div>
                  <p className="text-white">Email:</p>
                  <p className="text-white">support@movieZ.com</p>
                </div>
              </div>
              <div className="flex gap-[12px] items-center">
                <PhoneIcon />
                <div>
                  <p className="text-white">Email:</p>
                  <p className="text-white">support@movieZ.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-[12px] text-white inter">
            Follow us
            <div className="flex gap-[12px]">
              <a
                href="https://www.facebook.com"
                className="inter text-sm text-white font-medium"
              >
                Facebook
              </a>
              <a
                href="https://www.instagram.com"
                className="inter text-sm text-white font-medium"
              >
                Instagram
              </a>
              <a
                href="https://www.twitter.com"
                className="inter text-sm text-white font-medium"
              >
                Twitter
              </a>
              <a
                href="https://www.youtube.com"
                className="inter text-sm text-white font-medium"
              >
                Youtube
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
