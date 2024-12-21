// // // import React from 'react'

// // // export const Jr = () => {
// // //   return (
// // //     <div>Jr</div>
// // //   )
// // // }

// // // const exec =[
// // //     {
// // //         "img": "https://res.cloudinary.com/dgfxygdz7/image/upload/v1734611487/PRATHAM-modified_yhpkzz.webp",
// // //         "name": "xyc ",
// // //         "job": "Event Head ",
// // //         "instagram": "https://www.instagram.com/pratham_01_mali/profilecard/?igsh=ZmJrcWhnMWs0bjkw",
// // //         "linkedin": "https://www.linkedin.com/in/pratham-mali-716907295?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
// // //         "github": "#"
// // //       },
// // //       {
// // //         "img": "https://res.cloudinary.com/dgfxygdz7/image/upload/v1734611487/PRATHAM-modified_yhpkzz.webp",
// // //         "name": "xyz ",
// // //         "job": "Event Head ",
// // //         "instagram": "https://www.instagram.com/pratham_01_mali/profilecard/?igsh=ZmJrcWhnMWs0bjkw",
// // //         "linkedin": "https://www.linkedin.com/in/pratham-mali-716907295?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
// // //         "github": "#"
// // //       },

// // //       {
// // //         "img": "https://res.cloudinary.com/dgfxygdz7/image/upload/v1734611487/PRATHAM-modified_yhpkzz.webp",
// // //         "name": "abc ",
// // //         "job": "Event Head ",
// // //         "instagram": "https://www.instagram.com/pratham_01_mali/profilecard/?igsh=ZmJrcWhnMWs0bjkw",
// // //         "linkedin": "https://www.linkedin.com/in/pratham-mali-716907295?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
// // //         "github": "#"
// // //       },

// // // ]


// // import React from 'react';

// // // ProfileCard Component
// // const ProfileCard = ({ data }) => {
// //   return (
// //     <div className="profile-card">
// //       <div className="img">
// //         <img src={data.img} alt={data.name} />
// //       </div>
// //       <div className="caption">
// //         <h3>{data.name}</h3>
// //         <p>{data.job}</p>
// //         <div className="social-links">
// //           {data.linkedin && (
// //             <a href={data.linkedin} target="_blank" rel="noopener noreferrer">
// //               <i className="fa fa-linkedin-square"></i>
// //             </a>
// //           )}
// //           {data.github && (
// //             <a href={data.github} target="_blank" rel="noopener noreferrer">
// //               <i className="fa fa-github"></i>
// //             </a>
// //           )}
// //           {data.instagram && (
// //             <a href={data.instagram} target="_blank" rel="noopener noreferrer">
// //               <i className="fa-brands fa-instagram"></i>
// //             </a>
// //           )}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // // Jr Component to Display Junior Executives
// // export const Jr = () => {
// //   const exec = [
// //     {
// //       img: "https://res.cloudinary.com/dgfxygdz7/image/upload/v1734611487/PRATHAM-modified_yhpkzz.webp",
// //       name: "xyc",
// //       job: "Event Head",
// //       instagram: "https://www.instagram.com/pratham_01_mali/profilecard/?igsh=ZmJrcWhnMWs0bjkw",
// //       linkedin: "https://www.linkedin.com/in/pratham-mali-716907295?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
// //       github: "#"
// //     },
// //     {
// //       img: "https://res.cloudinary.com/dgfxygdz7/image/upload/v1734611487/PRATHAM-modified_yhpkzz.webp",
// //       name: "xyz",
// //       job: "Event Head",
// //       instagram: "https://www.instagram.com/pratham_01_mali/profilecard/?igsh=ZmJrcWhnMWs0bjkw",
// //       linkedin: "https://www.linkedin.com/in/pratham-mali-716907295?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
// //       github: "#"
// //     },
// //     {
// //       img: "https://res.cloudinary.com/dgfxygdz7/image/upload/v1734611487/PRATHAM-modified_yhpkzz.webp",
// //       name: "abc",
// //       job: "Event Head",
// //       instagram: "https://www.instagram.com/pratham_01_mali/profilecard/?igsh=ZmJrcWhnMWs0bjkw",
// //       linkedin: "https://www.linkedin.com/in/pratham-mali-716907295?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
// //       github: "#"
// //     },
// //   ];

// //   return (
// //     <div className="home-container">
// //       <div className="team-grid">
// //         {exec.map((member, index) => (
// //           <ProfileCard key={index} data={member} />
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };


import React from 'react';

// ProfileCard Component
const ProfileCard = ({ data }) => {
  return (
    <div className="profile-card">
      <div className="img">
        <img src={data.img} alt={data.name} />
      </div>
      <div className="caption">
        <h3>{data.name}</h3>
        <p>{data.job}</p>
        <div className="social-links">
          {data.linkedin && (
            <a href={data.linkedin} target="_blank" rel="noopener noreferrer">
              <i className="fa fa-linkedin-square"></i>
            </a>
          )}
          {data.github && (
            <a href={data.github} target="_blank" rel="noopener noreferrer">
              <i className="fa fa-github"></i>
            </a>
          )}
          {data.instagram && (
            <a href={data.instagram} target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-instagram"></i>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

// Jr Component to Display Junior Executives
export const Jr = () => {
  const exec = [
    {
      img: "https://res.cloudinary.com/dgcs8uhuz/image/upload/v1734776519/VINAYS_1_aylow6.png",
      name: "Vinay Sawant",
      job: "Junior Executive",
      instagram: "https://www.instagram.com/vinays.18/profilecard/?igsh=MTVqOHB3ZWdsbHJjMA==",
      linkedin: "http://linkedin.com/in/vinay-sawant-b19486259",
      github: "#"
    },
    {
      img: "https://res.cloudinary.com/dgcs8uhuz/image/upload/v1734777412/Gaurav_nectan.png",
      name: "Gaurav Tarate",
      job: "Junior Executive",
      instagram: "https://www.instagram.com/g_aura_v.35?igsh=aWRsYW9qaWN4ZHNy",
      linkedin: "http://www.linkedin.com/in/gaurav-tarate",
      github: "https://github.com/Gaurav3251"
    },
    
    {
        img: "https://res.cloudinary.com/dgcs8uhuz/image/upload/v1734777584/atharv_ntrpza.png",
        name: "Atharav Pawar ",
        job: "Junior Executive",
        instagram: "https://www.instagram.com/_athpawar_?igsh=MTgyYnh0cGVyejNqbQ==",
        linkedin: "https://www.linkedin.com/in/atharav-pawar-98782b251",
        github: "https://github.com/atharavpawar2004"
      },
      {
        img: "https://res.cloudinary.com/dgcs8uhuz/image/upload/v1734778174/prithvi_x5qcfu.png",
        name: "Prithviraj More",
        job: "Junior Executive",
        instagram: "https://www.instagram.com/prithxvhie.44/",
        linkedin: "https://www.linkedin.com/in/prithviraj44/",
        github: "https://github.com/Prithxvhie44"
      },
      {
        img: "https://res.cloudinary.com/dgcs8uhuz/image/upload/v1734778554/Mitali_pqe5n7.png",
        name: "Mitali Sonkamble",
        job: "Junior Executive",
        instagram: "https://www.instagram.com/mitali.sonkamble/profilecard/?igsh=MTVtZDBpMjI1Mzc3ZQ==",
        linkedin: "https://www.linkedin.com/in/mitali-sonkamble-9ba870283?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        github: "https://github.com/Prithxvhie44"
      },
      {
        img: "https://res.cloudinary.com/dgcs8uhuz/image/upload/v1734778664/om_desh_wypnho.png",
        name: "Om Deshmukh",
        job: "Junior Executive",
        instagram: "https://www.instagram.com/omdeshmukh.h/?next=https%3A%2F%2Fwww.instagram.com%2Fdirect%2Finbox%2F%3F__coig_login%3D1",
        linkedin: "www.linkedin.com/in/om-deshmukh-928a282a6",
        github: "https://github.com/OM-DESHMUKH12"
      },
      {
        img: "https://res.cloudinary.com/dgcs8uhuz/image/upload/v1734778495/vinayak_gbywit.png",
        name: "Vinayak Pawara",
        job: "Junior Executive",
        instagram: "https://www.instagram.com/vinayakpawara9?igsh=bmVqOHBpem1lcnRy&utm_source=qr",
        linkedin: "https://www.linkedin.com/in/vinayak-pawara-362580289/",
        github: "https://github.com/WhitePanda9"
      },
      {
        img: "https://res.cloudinary.com/dgcs8uhuz/image/upload/v1734778939/Giriwar_aue7pe.png",
        name: "Prithviraj More",
        job: "Junior Executive",
        instagram: "https://www.instagram.com/prithxvhie.44/",
        linkedin: "https://www.linkedin.com/in/prithviraj44/",
        github: "https://github.com/Prithxvhie44"
      },
      {
        img: "https://res.cloudinary.com/dgfxygdz7/image/upload/v1734611487/PRATHAM-modified_yhpkzz.webp",
        name: "Prithviraj More",
        job: "Junior Executive",
        instagram: "https://www.instagram.com/prithxvhie.44/",
        linkedin: "https://www.linkedin.com/in/prithviraj44/",
        github: "https://github.com/Prithxvhie44"
      },
      {
        img: "https://res.cloudinary.com/dgfxygdz7/image/upload/v1734611487/PRATHAM-modified_yhpkzz.webp",
        name: "Prithviraj More",
        job: "Junior Executive",
        instagram: "https://www.instagram.com/prithxvhie.44/",
        linkedin: "https://www.linkedin.com/in/prithviraj44/",
        github: "https://github.com/Prithxvhie44"
      },
      {
        img: "https://res.cloudinary.com/dgfxygdz7/image/upload/v1734611487/PRATHAM-modified_yhpkzz.webp",
        name: "Prithviraj More",
        job: "Junior Executive",
        instagram: "https://www.instagram.com/prithxvhie.44/",
        linkedin: "https://www.linkedin.com/in/prithviraj44/",
        github: "https://github.com/Prithxvhie44"
      },
      {
        img: "https://res.cloudinary.com/dgfxygdz7/image/upload/v1734611487/PRATHAM-modified_yhpkzz.webp",
        name: "Prithviraj More",
        job: "Junior Executive",
        instagram: "https://www.instagram.com/prithxvhie.44/",
        linkedin: "https://www.linkedin.com/in/prithviraj44/",
        github: "https://github.com/Prithxvhie44"
      },
      {
        img: "https://res.cloudinary.com/dgfxygdz7/image/upload/v1734611487/PRATHAM-modified_yhpkzz.webp",
        name: "Prithviraj More",
        job: "Junior Executive",
        instagram: "https://www.instagram.com/prithxvhie.44/",
        linkedin: "https://www.linkedin.com/in/prithviraj44/",
        github: "https://github.com/Prithxvhie44"
      },
      {
        img: "https://res.cloudinary.com/dgfxygdz7/image/upload/v1734611487/PRATHAM-modified_yhpkzz.webp",
        name: "Prithviraj More",
        job: "Junior Executive",
        instagram: "https://www.instagram.com/prithxvhie.44/",
        linkedin: "https://www.linkedin.com/in/prithviraj44/",
        github: "https://github.com/Prithxvhie44"
      },
      {
        img: "https://res.cloudinary.com/dgfxygdz7/image/upload/v1734611487/PRATHAM-modified_yhpkzz.webp",
        name: "Prithviraj More",
        job: "Junior Executive",
        instagram: "https://www.instagram.com/prithxvhie.44/",
        linkedin: "https://www.linkedin.com/in/prithviraj44/",
        github: "https://github.com/Prithxvhie44"
      },
      {
        img: "https://res.cloudinary.com/dgfxygdz7/image/upload/v1734611487/PRATHAM-modified_yhpkzz.webp",
        name: "Prithviraj More",
        job: "Junior Executive",
        instagram: "https://www.instagram.com/prithxvhie.44/",
        linkedin: "https://www.linkedin.com/in/prithviraj44/",
        github: "https://github.com/Prithxvhie44"
      },
      {
        img: "https://res.cloudinary.com/dgfxygdz7/image/upload/v1734611487/PRATHAM-modified_yhpkzz.webp",
        name: "Prithviraj More",
        job: "Junior Executive",
        instagram: "https://www.instagram.com/prithxvhie.44/",
        linkedin: "https://www.linkedin.com/in/prithviraj44/",
        github: "https://github.com/Prithxvhie44"
      },
      {
        img: "https://res.cloudinary.com/dgfxygdz7/image/upload/v1734611487/PRATHAM-modified_yhpkzz.webp",
        name: "Prithviraj More",
        job: "Junior Executive",
        instagram: "https://www.instagram.com/prithxvhie.44/",
        linkedin: "https://www.linkedin.com/in/prithviraj44/",
        github: "https://github.com/Prithxvhie44"
      },
      {
        img: "https://res.cloudinary.com/dgfxygdz7/image/upload/v1734611487/PRATHAM-modified_yhpkzz.webp",
        name: "Prithviraj More",
        job: "Junior Executive",
        instagram: "https://www.instagram.com/prithxvhie.44/",
        linkedin: "https://www.linkedin.com/in/prithviraj44/",
        github: "https://github.com/Prithxvhie44"
      },
      {
        img: "https://res.cloudinary.com/dgfxygdz7/image/upload/v1734611487/PRATHAM-modified_yhpkzz.webp",
        name: "Prithviraj More",
        job: "Junior Executive",
        instagram: "https://www.instagram.com/prithxvhie.44/",
        linkedin: "https://www.linkedin.com/in/prithviraj44/",
        github: "https://github.com/Prithxvhie44"
      },
      {
        img: "https://res.cloudinary.com/dgfxygdz7/image/upload/v1734611487/PRATHAM-modified_yhpkzz.webp",
        name: "Prithviraj More",
        job: "Junior Executive",
        instagram: "https://www.instagram.com/prithxvhie.44/",
        linkedin: "https://www.linkedin.com/in/prithviraj44/",
        github: "https://github.com/Prithxvhie44"
      },
      {
        img: "https://res.cloudinary.com/dgfxygdz7/image/upload/v1734611487/PRATHAM-modified_yhpkzz.webp",
        name: "Prithviraj More",
        job: "Junior Executive",
        instagram: "https://www.instagram.com/prithxvhie.44/",
        linkedin: "https://www.linkedin.com/in/prithviraj44/",
        github: "https://github.com/Prithxvhie44"
      },
      {
        img: "https://res.cloudinary.com/dgfxygdz7/image/upload/v1734611487/PRATHAM-modified_yhpkzz.webp",
        name: "Prithviraj More",
        job: "Junior Executive",
        instagram: "https://www.instagram.com/prithxvhie.44/",
        linkedin: "https://www.linkedin.com/in/prithviraj44/",
        github: "https://github.com/Prithxvhie44"
      },
      {
        img: "https://res.cloudinary.com/dgfxygdz7/image/upload/v1734611487/PRATHAM-modified_yhpkzz.webp",
        name: "Prithviraj More",
        job: "Junior Executive",
        instagram: "https://www.instagram.com/prithxvhie.44/",
        linkedin: "https://www.linkedin.com/in/prithviraj44/",
        github: "https://github.com/Prithxvhie44"
      },
      {
        img: "https://res.cloudinary.com/dgfxygdz7/image/upload/v1734611487/PRATHAM-modified_yhpkzz.webp",
        name: "Prithviraj More",
        job: "Junior Executive",
        instagram: "https://www.instagram.com/prithxvhie.44/",
        linkedin: "https://www.linkedin.com/in/prithviraj44/",
        github: "https://github.com/Prithxvhie44"
      },
      {
        img: "https://res.cloudinary.com/dgfxygdz7/image/upload/v1734611487/PRATHAM-modified_yhpkzz.webp",
        name: "Prithviraj More",
        job: "Junior Executive",
        instagram: "https://www.instagram.com/prithxvhie.44/",
        linkedin: "https://www.linkedin.com/in/prithviraj44/",
        github: "https://github.com/Prithxvhie44"
      },
      {
        img: "https://res.cloudinary.com/dgfxygdz7/image/upload/v1734611487/PRATHAM-modified_yhpkzz.webp",
        name: "Prithviraj More",
        job: "Junior Executive",
        instagram: "https://www.instagram.com/prithxvhie.44/",
        linkedin: "https://www.linkedin.com/in/prithviraj44/",
        github: "https://github.com/Prithxvhie44"
      },
      {
        img: "https://res.cloudinary.com/dgfxygdz7/image/upload/v1734611487/PRATHAM-modified_yhpkzz.webp",
        name: "Prithviraj More",
        job: "Junior Executive",
        instagram: "https://www.instagram.com/prithxvhie.44/",
        linkedin: "https://www.linkedin.com/in/prithviraj44/",
        github: "https://github.com/Prithxvhie44"
      },
      {
        img: "https://res.cloudinary.com/dgfxygdz7/image/upload/v1734611487/PRATHAM-modified_yhpkzz.webp",
        name: "Prithviraj More",
        job: "Junior Executive",
        instagram: "https://www.instagram.com/prithxvhie.44/",
        linkedin: "https://www.linkedin.com/in/prithviraj44/",
        github: "https://github.com/Prithxvhie44"
      },
      {
        img: "https://res.cloudinary.com/dgfxygdz7/image/upload/v1734611487/PRATHAM-modified_yhpkzz.webp",
        name: "Prithviraj More",
        job: "Junior Executive",
        instagram: "https://www.instagram.com/prithxvhie.44/",
        linkedin: "https://www.linkedin.com/in/prithviraj44/",
        github: "https://github.com/Prithxvhie44"
      },
      {
        img: "https://res.cloudinary.com/dgfxygdz7/image/upload/v1734611487/PRATHAM-modified_yhpkzz.webp",
        name: "Prithviraj More",
        job: "Junior Executive",
        instagram: "https://www.instagram.com/prithxvhie.44/",
        linkedin: "https://www.linkedin.com/in/prithviraj44/",
        github: "https://github.com/Prithxvhie44"
      },
      {
        img: "https://res.cloudinary.com/dgfxygdz7/image/upload/v1734611487/PRATHAM-modified_yhpkzz.webp",
        name: "Prithviraj More",
        job: "Junior Executive",
        instagram: "https://www.instagram.com/prithxvhie.44/",
        linkedin: "https://www.linkedin.com/in/prithviraj44/",
        github: "https://github.com/Prithxvhie44"
      },
      {
        img: "https://res.cloudinary.com/dgfxygdz7/image/upload/v1734611487/PRATHAM-modified_yhpkzz.webp",
        name: "Prithviraj More",
        job: "Junior Executive",
        instagram: "https://www.instagram.com/prithxvhie.44/",
        linkedin: "https://www.linkedin.com/in/prithviraj44/",
        github: "https://github.com/Prithxvhie44"
      },
      {
        img: "https://res.cloudinary.com/dgfxygdz7/image/upload/v1734611487/PRATHAM-modified_yhpkzz.webp",
        name: "Prithviraj More",
        job: "Junior Executive",
        instagram: "https://www.instagram.com/prithxvhie.44/",
        linkedin: "https://www.linkedin.com/in/prithviraj44/",
        github: "https://github.com/Prithxvhie44"
      },
      {
        img: "https://res.cloudinary.com/dgfxygdz7/image/upload/v1734611487/PRATHAM-modified_yhpkzz.webp",
        name: "Prithviraj More",
        job: "Junior Executive",
        instagram: "https://www.instagram.com/prithxvhie.44/",
        linkedin: "https://www.linkedin.com/in/prithviraj44/",
        github: "https://github.com/Prithxvhie44"
      }
      
  ];

  return (
    <div className="home-container">
      {/* Heading for Junior Executives Section */}
      <h2 className="section-heading">Junior Executives</h2>
      <div className="team-grid">
        {exec.map((member, index) => (
          <ProfileCard key={index} data={member} />
        ))}
      </div>
    </div>
  );
};


  
