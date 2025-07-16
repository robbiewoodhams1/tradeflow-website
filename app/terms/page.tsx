
import {
  Header,
  Footer
} from '@/components'

export default function TermPage() {

  return(
    <div className="w-full flex flex-col bg-blue-50 items-center gap-20">
      <Header />

      <h2 className='text-blue-950 text-3xl font-bold'>Terms & Conditions</h2>

        <div className="flex flex-col gap-8 max-w-4xl w-full text-base md:text-lg text-gray-800 leading-relaxed">

          <p><strong>Effective Date:</strong> 16/07/2025</p>

          <h2 className="text-2xl font-bold text-blue-800 mt-6">1. Acceptance of Terms</h2>
          <p>
            By creating an account or using TradeFlow, you agree to these Terms & Conditions. If you do not agree, please do not use the app.
          </p>

          <h2 className="text-2xl font-bold text-blue-800 mt-6">2. Eligibility</h2>
          <p>
            TradeFlow is intended for professional tradespeople. By using the app, you confirm that you are at least 18 years old or have permission from a legal guardian.
          </p>

          <h2 className="text-2xl font-bold text-blue-800 mt-6">3. User Accounts</h2>
          <p>
            To use TradeFlow, you must create an account using a valid email, name, and password. You are responsible for keeping your login credentials secure.
          </p>

          <h2 className="text-2xl font-bold text-blue-800 mt-6">4. Quote & Customer Data</h2>
          <p>
            You retain full ownership of the quotes, templates, and customer information you create. We store this data to enable the functionality of the app.
          </p>
          <p>
            You agree not to store unlawful or fraudulent content in the app. We reserve the right to remove inappropriate content and suspend accounts that misuse the platform.
          </p>

          <h2 className="text-2xl font-bold text-blue-800 mt-6">5. AI & Automation</h2>
          <p>
            If AI-powered features are used in TradeFlow (e.g. quote suggestions), the results are generated based on the input you provide. We do not guarantee their accuracy or completeness.
          </p>

          <h2 className="text-2xl font-bold text-blue-800 mt-6">6. Data & Privacy</h2>
          <p>
            We care about your privacy. Please read our <a href="/privacy" className="text-blue-600 underline">Privacy Policy</a> to understand how your data is collected, stored, and used.
          </p>

          <h2 className="text-2xl font-bold text-blue-800 mt-6">7. Changes to the App</h2>
          <p>
            We may update or change features within TradeFlow at any time, including free or paid features. We’ll aim to notify users of major updates, but we’re not obligated to do so.
          </p>

          <h2 className="text-2xl font-bold text-blue-800 mt-6">8. Termination</h2>
          <p>
            We reserve the right to suspend or delete accounts that violate these terms, abuse the platform, or engage in fraudulent activity. You can also delete your account by contacting our support team.
          </p>

          <h2 className="text-2xl font-bold text-blue-800 mt-6">9. Contact</h2>
          <p>
            If you have any questions or concerns about these terms, feel free to reach out to us:<br />
            <strong>woodhamshelp@gmail.com</strong>
          </p>

        </div>


      <Footer />
    </div>
  );

}
