
import {
  Header,
  Footer
} from '@/components'

export default function PrivacyPage() {

  return(
    <div className="w-full flex flex-col bg-blue-50 items-center gap-20">
      <Header />

      <h2 className='text-blue-950 text-3xl font-bold'>Privacy Policy</h2>

      <div className="flex flex-col gap-8 max-w-4xl w-full text-base md:text-lg text-gray-800 leading-relaxed">

        <p><strong className="font-semibold">Effective Date:</strong> 16/07/2025</p>

        <p>
          At <strong className="font-semibold">TradeFlow</strong>, your privacy matters to us.
          This policy explains what data we collect, how we store it, and what your options are.
        </p>

        <h2 className="text-2xl font-bold text-blue-800 mt-6">What We Collect</h2>
        <p>When you sign up for TradeFlow, we collect:</p>
          <ul className="list-disc list-inside ml-4">
            <li>Your <strong className="font-semibold">name</strong></li>
            <li>Your <strong className="font-semibold">email address</strong></li>
            <li>Your <strong className="font-semibold">password</strong></li>
          </ul>
        <p>We also store all <strong className="font-semibold">quotes, templates, and customer details</strong> you create or save in the app.</p>

        <h2 className="text-2xl font-bold text-blue-800 mt-6">Where Your Data Goes</h2>
        <p>We use <strong className="font-semibold">Supabase</strong> to manage and store your data, including:</p>
        <ul className="list-disc list-inside ml-4">
          <li>User accounts and authentication</li>
          <li>Saved quotes, customer profiles, and templates</li>
        </ul>
        <p>
          Please note: This data is <strong className="font-semibold">not encrypted</strong>,
          so we recommend avoiding storing any highly sensitive personal information.
        </p>

        <h2 className="text-2xl font-bold text-blue-800 mt-6">Do You Use Ads or Share My Info?</h2>
        <p>
          <strong className="font-semibold">No.</strong> TradeFlow does <strong className="font-semibold">not</strong> use ads or share your personal data with any third parties.
        </p>

        <h2 className="text-2xl font-bold text-blue-800 mt-6">Do You Use Analytics?</h2>
        <p>
          At this time, <strong className="font-semibold">TradeFlow</strong> does <strong className="font-semibold">not</strong> use any tracking or analytics tools.
        </p>

        <h2 className="text-2xl font-bold text-blue-800 mt-6">How to Delete Your Data</h2>
        <ul className="list-disc list-inside ml-4">
          <li>You can <strong className="font-semibold">delete individual quotes, templates, or customers</strong> directly in the app.</li>
          <li>
            If you’d like to <strong className="font-semibold">delete your entire account and all stored data</strong>, contact us at:<br />
            <strong className="font-semibold">woodhamshelp@gmail.com</strong>
          </li>
        </ul>

        <h2 className="text-2xl font-bold text-blue-800 mt-6">Your Data, Your Control</h2>
        <p>
          We don’t sell your data or spam your inbox. TradeFlow is here to make your life easier — and that includes keeping your information safe and simple to manage.
        </p>


      </div>

      <Footer />
    </div>
  );

}
