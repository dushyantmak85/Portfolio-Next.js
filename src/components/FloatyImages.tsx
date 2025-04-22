// 'use client';
// import Image from 'next/image';
// import { useEffect, useState } from 'react';

// type FloatyImage = {
//   id: number;
//   top: number;
//   left: number;
//   size: number;
//   translateY: number;
//   direction: 1 | -1;
//   speed: number;
// };

// const MIN_IMAGES = 25;
// const MAX_IMAGES = 50;
// let imageIdCounter = 0;

// const generateImage = (): FloatyImage => ({
//   id: imageIdCounter++,
//   top: Math.random() * 100,
//   left: Math.random() * 100,
//   size: 200 + Math.random() * 100,
//   translateY: 0,
//   direction: Math.random() > 0.5 ? 1 : -1,
//   speed: 0.2 + Math.random() * 0.3,
// });

// const FloatyImages = () => {
//   const [images, setImages] = useState<FloatyImage[]>([]);

//   // Initialize with at least 25 floaty bois
//   useEffect(() => {
//     const initialImages = Array.from({ length: MIN_IMAGES }, generateImage);
//     setImages(initialImages);
//   }, []);

//   // Floating animation logic
//   useEffect(() => {
//     const floatInterval = setInterval(() => {
//       setImages(prev =>
//         prev.map(img => {
//           let newY = img.translateY + img.speed * img.direction;
//           let newDir = img.direction;

//           // Bounce within bounds
//           if (Math.abs(newY) > 20) newDir *= -1;

//           return { ...img, translateY: newY, direction: newDir };
//         })
//       );
//     }, 30);
//     return () => clearInterval(floatInterval);
//   }, []);

//   // Add new image every 3s if under MAX or below MIN
//   useEffect(() => {
//     const spawnInterval = setInterval(() => {
//       setImages(prev => {
//         const count = prev.length;
//         if (count < MIN_IMAGES || count < MAX_IMAGES) {
//           return [...prev, generateImage()];
//         }
//         return prev;
//       });
//     }, 3000);
//     return () => clearInterval(spawnInterval);
//   }, []);

//   return (
//     <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
//       {images.map(({ id, top, left, size, translateY }) => (
//         <div
//           key={id}
//           style={{
//             position: 'absolute',
//             top: `${top}%`,
//             left: `${left}%`,
//             width: `${size}px`,
//             height: `${size}px`,
//             transform: `translateY(${translateY}px)`,
//             transition: 'transform 0.03s linear',
//             opacity: 0.3,
//             zIndex: 0,
//           }}
//         >
//           <Image
//             src="/floaty.png"
//             alt="Floating Decoration"
//             layout="fill"
//             objectFit="contain"
//             draggable={false}
//             className="select-none brightness-110 contrast-125 drop-shadow-lg"
//             priority
//           />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default FloatyImages;
