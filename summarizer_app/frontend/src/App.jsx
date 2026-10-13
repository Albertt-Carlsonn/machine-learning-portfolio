import {useState} from 'react';
import './App.css'
import axios from 'axios'
function Main(){
  const [text, setText] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);
  
  async function sendData(e){
    e.preventDefault();
    setLoading(true);
    setResult('')

    try{
      const response = await axios.post('http://localhost:8000/summarize', {text});
      setResult(response.data);
    }
    catch (error) {
    const detail = error.response?.data?.detail;
    setResult(typeof detail === 'string' ? detail : 'Something went wrong');
    }
    finally{
      setLoading(false);
    }
  }
  
  return(
    <>
      <nav className='bg-black flex items-center h-[80px]'>
      <h1 className='text-white text-4xl font-medium flex items-center px-5 cursor-pointer'>SUMMARIZER</h1>
      </nav>
      <main className='mx-40 mt-5 flex justify-between'>
        <form className='flex flex-col items-center' onSubmit={sendData}>
          <textarea className='border-2 w-[500px] h-[450px] p-3 resize-none text-[17px]' maxLength={15000} onChange={(e) => setText(e.target.value)}></textarea>
          <button className='bg-orange-300 w-[280px] h-[50px] text-center rounded-[5px] text-[25px] mt-3 cursor-pointer disabled:bg-gray-500 disabled:text-white hover:bg-orange-200 active:bg-amber-300'
          type='submit' disabled={loading}>{loading ? 'summarizing...' : 'summarize'}</button>
          </form>
        <div className='flex flex-col items-center'>
          <div className='border-2 w-[500px] h-[450px] overflow-y-auto'><p className='p-3 text-[17px]'>{result}</p></div>
          </div>
      </main>
    </>
  );
}

export default Main;