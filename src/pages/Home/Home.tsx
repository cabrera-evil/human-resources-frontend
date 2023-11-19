export default function Home() {
  return (
    <div className='flex items-center justify-center min-h-screen'>
      {/* Welcome back message screen */}
      <div className='flex flex-col items-center justify-center'>
        <h1 className='text-4xl font-bold text-gray-800 m-2'>Welcome back!</h1>
        <p className='text-gray-500 m-2'>What would you like to do today?</p>
      </div>
    </div>
  );
}
