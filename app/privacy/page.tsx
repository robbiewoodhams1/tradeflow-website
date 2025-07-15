
import {
  Header,
  Footer
} from '@/components'

export default function PrivacyPage() {

  return(
    <div className="w-full flex flex-col bg-blue-400 items-center gap-20">
      <Header />

      <h2 className='text-blue-950 text-3xl font-bold'>Privacy Policy</h2>

      <p className='text-white text-lg p-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

      <Footer />
    </div>
  );

}
