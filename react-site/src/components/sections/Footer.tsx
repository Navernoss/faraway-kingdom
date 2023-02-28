import React from 'react';

import {ourCommand} from 'src/constants/OurCommand';

import footerBgImage from 'img/footerBgImage.png';
import ApolloLogo from 'img/technology-icons/apolloLogo.svg';
import GitHubLogo from 'img/technology-icons/gitHubLogo.svg';
import GraphLogo from 'img/technology-icons/graphLogo.svg';
import PolygonLogo from 'img/technology-icons/polygonLogo.svg';
import ReactLogo from 'img/technology-icons/reactLogo.svg';
import TypescriptLogo from 'img/technology-icons/typescriptLogo.svg';

export function FooterSection() {
  return (
    <div className="bg-gradient-4 relative overflow-hidden">
      <div className="w-[9999px] absolute h-full right-0">
        <img src={footerBgImage} height="100%" className="absolute right-0" />
      </div>
      <div className="content-container py-[1.5em] z-[10] text-content">
        <h3 className="text-white pb-[1em]">Technology Stack</h3>
        <div className="flex flex-row flex-wrap gap-[1.25em] justify-between gap-y-[1.25em] text-white">
          <ApolloLogo className="w-[4em]" />
          <GitHubLogo className="w-[4em]" />
          <GraphLogo className="w-[4em]" />
          <PolygonLogo className="w-[4em]" />
          <ReactLogo className="w-[4em]" />
          <TypescriptLogo className="w-[4em]" />
        </div>
        <h3 className="text-white mt-[1.7em]">Команда</h3>
        <div className="flex flex-row justify-between flex-wrap">
          {ourCommand.map(({name, role, img}) => {
            return (
              <div className="text-center flex flex-col flex-1 max-w-[20%] min-w-[120px]">
                <img
                  src={img}
                  className="rounded-full z-10 mb-[0.5em] h-[90%] w-[90%] self-center"
                />
                <p
                  style={{
                    margin: 0,
                    fontFamily: 'ProximaNovaBold',
                  }}
                  className="text-white">
                  {name}
                </p>
                <p style={{margin: 0}} className="text-white">
                  {role}
                </p>
              </div>
            );
          })}
        </div>
        {/* <h3 className="text-white mt-[1.7em]">Контакты</h3> */}
      </div>
    </div>
  );
}