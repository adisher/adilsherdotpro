'use client';
import useWindowSize from "./WindowSize";

function Ad() {
  const { width } = useWindowSize();

  return (
    <div
      className="mt-4 relative w-full overflow-hidden"
      style={{ paddingTop: "15%" }}
    >
      <div className="absolute inset-0 flex justify-center items-center">
        {width && width > 1024 ? (
          <iframe
            className="w-full h-full"
            src="/ad.html"
            style={{
              maxWidth: "758px",
              maxHeight: "120px",
              margin: "auto",
              position: "absolute",
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
            }}
            allowFullScreen
          />
        ) : (
          <iframe
            className="w-full h-full"
            src="/adMobile.html"
            style={{
              maxWidth: "380px",
              maxHeight: "120px",
              margin: "auto",
              position: "absolute",
              top: 0,
              left: 0,
              bottom: 0,
                right: 0,
              overflow: "hidden",
            }}
            allowFullScreen
            scrolling="no"
          />
        )}
      </div>
    </div>
  );
}

export default Ad;
