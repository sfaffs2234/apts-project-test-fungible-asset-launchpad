import { Link } from "react-router-dom";
import { WalletSelector } from "./WalletSelector";
import { buttonVariants } from "./ui/button";

export function Header() {
  return (
    <div className="flex items-center justify-between px-4 py-2 max-w-screen-xl mx-auto w-full flex-wrap">
      <h1 className="display">
        <Link to="/">Fungible Asset Launchpad</Link>
      </h1>

      <div className="flex gap-2 items-center flex-wrap">
        <>
          <Link className={buttonVariants({ variant: "link" })} to={"/"}>
            All Assets
          </Link>
          <Link className={buttonVariants({ variant: "link" })} to={"/create-asset"}>
            Create Asset
          </Link>
        </>
        <WalletSelector />
      </div>
    </div>
  );
}
