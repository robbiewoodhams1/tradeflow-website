
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
      title: '1. Deleting your Data',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      title: '2. Deleting your Account',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }
  ]

  return(
    <div className="w-full flex flex-col bg-blue-400 items-center gap-20">
      <Header />

      <h2 className='text-blue-950 text-3xl font-bold'>Deleting Data</h2>



      <div className='text-start flex flex-col p-10 gap-20'>
        {items.map((item, index) => (
          <div
            key={index}
          >
            <h2 className='text-blue-950 text-2xl font-bold mb-5'>{item.title}</h2>
            <p className='text-white text-lg'>{item.answer}</p>
          </div>
        ))}
      </div>



      <Footer />
    </div>
  );
}
