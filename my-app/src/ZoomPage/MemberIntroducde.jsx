import React from "react";
import { member_card as Member } from "../constant";
import { GenOne_card as gMember } from "../constant";

const MemberIntroducde = () => {
  return (
    <>
      <div id="MemberIntro" className="min-h-screen w-screen">
        <div className="relative mb-8 mt-36 flex flex-col items-center">
          <div className="mt-5 text-center text-5xl uppercase leading-[0.8] md:text-[6rem]">
            Me<b>e</b>t wi<b>t</b>h <b>u</b>s
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 px-6 md:grid-cols-3">
          {Member.map((i, index) => (
            <div
              key={index}
              className="relative border border-black/20 rounded-xl p-4 overflow-hidden"
              style={{ backgroundColor: i.colors }}
            >
              {i.image && (
                <img
                  src={i.image}
                  alt={i.name}
                  className="mb-4 h-40 w-full object-cover"
                />
              )}

              <label className="block text-lg  font-bold text-white">
                {i.name}
              </label>

              <span className="text-md  text-white/80">{i.role}</span>
            </div>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-2 gap-6 px-6 mb-24 md:grid-cols-3">
          {gMember.map((i, index) => {
            return (
              <div
                key={index}
                className="relative border border-black/20 rounded-xl p-4 overflow-hidden"
                style={{ backgroundColor: i.colors }}
              >
                {i.image && (
                  <img
                    src={i.image}
                    alt={i.name}
                    className="mb-4 h-40 w-full object-cover"
                  />
                )}

                <label className="block text-lg  font-bold text-white">
                  {i.name}
                </label>

                <span className="text-md  text-white/80">{i.role}</span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default MemberIntroducde;
