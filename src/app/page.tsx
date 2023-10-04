const { KofiButton } = require("react-kofi-button");
export default function Home() {

  return (

    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-3xl">Solo Tools</h1>
      <hr></hr>
      <ul>
        <li>
          <a className='bg-gray-600 md:hover:bg-gray-700 active:bg-gray-700 text-white font-bold ms-1 py-2 px-3 rounded' href="/tm">Terraforming Mars Resource Tracker 🧑‍🚀</a>
        </li>
      </ul>
      <hr></hr>
      <div className="flex flex-col items-center">
        <div className="m-2 border border-2 rounded">
          <KofiButton
            username="hecedu"
            label="Buy me a meeple" 
            preset="skinny"
            animation="on_hover"
            backgroundColor="kofiBlack"/>
        </div>
        <a className='text-end text-xs mx-2' href='https://hectormagana.art/'>©️2023 B-Llage</a>
      </div>
    </main >
  )
}
