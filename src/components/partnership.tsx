import SpotifyLogo from "../assets/spotify-logo.svg";
import GoogleLogo from "../assets/google-logo.svg";
import AppleLogo from "../assets/apple-logo.svg";
import SlackLogo from "../assets/slack-logo.svg";
import AdobeLogo from "../assets/adobe-logo.svg";

export function Partnership() {
  return (
    <section className="container mx-auto px-4">
      <div className="flex flex-col items-center justify-center gap-y-12 md:flex-row md:gap-x-6 md:gap-y-0 xl:gap-x-12">
        <div className="w-auto">
          <AppleLogo />
        </div>
        <div className="w-auto">
          <AdobeLogo />
        </div>
        <div className="w-auto">
          <SlackLogo />
        </div>
        <div className="w-auto">
          <SpotifyLogo />
        </div>
        <div className="w-auto">
          <GoogleLogo />
        </div>
      </div>
    </section>
  );
}
