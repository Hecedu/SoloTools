import React, { useEffect, useState } from "react";
import TagDisplay from "./TagDisplay";
import { Tag } from "@/models/Tag";
import TagCounter from "./TagCounter";


type TagManagerProps = {
  tags: Tag[]
  setTags: React.Dispatch<React.SetStateAction<Tag[]>>
}

export default function TagManager({ tags, setTags }: TagManagerProps) {
  const minDesktop = 768;
  const [showModal, setShowModal] = useState(false);

  function addAmountToTag(tagName: string, amountChange: number) {
    var index = tags.findIndex((obj => obj.name == tagName));
    if (tags[index].amount + amountChange >= 0) {
      tags[index].amount = tags[index].amount + amountChange;
      setTags([...tags])
    }
  }
  return (
    <div>
      <div className="flex items-center my-1 border border-2 rounded cursor-pointer" onClick={() => { setShowModal(true) }}>
        {

          tags.map((tag, index) => (

            <TagDisplay key={index} name={tag.name} image={tag.image} amount={tag.amount} />
          ))
        }
      </div>

      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            onClick={() => setShowModal(false)}>
            <div className="relative m-6 w-max h-auto">
              {/*content*/}
              <div className="border-2 rounded-lg shadow-lg relative flex flex-col w-full h-auto bg-stone-900 outline-none focus:outline-none" onClick={e => e.stopPropagation()}>
                {/*header*/}
                <div className="flex items-start justify-between p-2 border-b border-solid">
                  <h3 className="text-3xl font-semibold">
                    Tags
                  </h3>
                </div>
                {/*body*/}
                <div className="relative p-3 flex-auto">

                  <div className='grid grid-cols-3 md:grid-cols-7 gap-1 overflow-y-auto max-h-96'>
                    {
                      tags.map((tag, index) => (
                        <TagCounter key={tag.name} Tag={tags[index]} setTag={addAmountToTag} />
                      ))
                    }
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-2 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </div>
  );
}