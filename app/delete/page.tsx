
import {
  Header,
  Footer
} from '@/components'


type DeleteItem = {
  title: string;
  answer: string;
}

export default function DeletePage() {

  const items: DeleteItem[] = [
    {
      title: '1. Deleting Your Data',
      answer:
        'Deleting your data is quick and easy. If you’d like to remove a customer, quote, or saved template, simply go to the relevant section in the app and tap the "Delete" button. It will be permanently removed from your account and our database immediately.'
    },
    {
      title: '2. Deleting Your Account',
      answer:
        'To delete your entire account and all associated data, go to settings > account > delete account.'
    }
  ]

  return(
    <div className="w-full flex flex-col bg-blue-50 items-center gap-20">
      <Header />

      <h2 className='text-blue-950 text-3xl font-bold'>Deleting Data</h2>



      <div className='text-start flex flex-col p-10 gap-20'>
        {items.map((item, index) => (
          <div
            key={index}
          >
            <h2 className='text-blue-950 text-2xl font-bold mb-5'>{item.title}</h2>
            <p className='text-gray-800 text-lg'>{item.answer}</p>
          </div>
        ))}
      </div>



      <Footer />
    </div>
  );
}
