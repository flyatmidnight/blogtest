import Image from 'next/image';

function FixedSizeImage({ src, alt, width, height }) {
  return <Image src={src} alt={alt} width={width} height={height} />;
}

export default FixedSizeImage;
