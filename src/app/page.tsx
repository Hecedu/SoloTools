const { KofiButton } = require("react-kofi-button");
export default function Home() {

  return (

    <main className="flex min-h-full flex-col items-center justify-between py-24 bg-black">
      <div className="flex flex-col">
        <h1 className="text-5xl font-bold">Solo Tools</h1>
        <p className="text-small text-center font-bold inline">v1.1.0</p>
      </div>
      <hr></hr>
      <ul>
        <li>
          <a className='bg-gray-800 md:hover:bg-gray-700 active:bg-gray-700 text-white font-bold ms-1 py-2 px-3 rounded' href="/TerraformingMars">Terraforming Mars Resource Tracker</a>
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
            backgroundColor="kofiBlack" />
        </div>
        <a className='text-end text-xs mx-2' href='https://hectormagana.art/'>Made in 2023 by B-Llage</a>
      </div>
    </main >
  )
}
