import Image from "next/image"
import { SignInButton } from "@clerk/nextjs"
import { Button } from "./ui/button"

const PublicHeader = () => {
  return (
    <header className="flex min-h-12 flex-row items-center justify-between p-6">
      <div className="flex flex-row items-center justify-start">
        <Image
          src="/images/luttaka_logo.png"
          width={40}
          height={40}
          alt="Luttaka Logo"
          className="m-auto"
        />
        <div>LUTTAKA</div>
      </div>
      <div className="text-center">
        <SignInButton redirectUrl={`/`} mode="modal">
          <Button>Sign In</Button>
        </SignInButton>
      </div>
    </header>
  )
}

export default PublicHeader
