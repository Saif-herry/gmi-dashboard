const Avatar = ({
  src,
  alt,
  className,
  children,
  imageClass
}: {
  src: string;
  alt?: string;
  className?: string;
  imageClass?: string;
  children?: JSX.Element | JSX.Element[];
}) => {
  return (
    <div className={`${className || 'w-10 h-10 rounded-lg'} overflow-hidden`}>
      {src && src?.length > 0 ? (
        <img
          src={src}
          alt={alt || src}
          className={`${imageClass} w-full h-full`}
        />
      ) : (
        <div className="flex items-center h-full w-full justify-center">
          {children ? children : <></>}
        </div>
      )}
    </div>
  );
};

export default Avatar;
