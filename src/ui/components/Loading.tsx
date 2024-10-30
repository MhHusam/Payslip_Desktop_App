import "./Loading.css";
const Loading = () => {
  return (
    <div id="loader-container">
         <svg
        id="loader"
        width="300"
        height="60"
        viewBox="0 0 300 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask
          id="path-1-outside-1_1_6"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="300"
          height="60"
          fill="black"
        >
          <rect fill="white" x="0" y="0" width="300" height="60" />
          {/* 'P' */}
          <path d="M5 53V6H15C20 6 25 10 25 16C25 22 20 26 15 26H10V53H5Z" />
          {/* 'A' */}
          <path d="M35 53L45 6H50L60 53H55L51 36H44L41 53H35ZM47 31L49 21L51 31H47Z" />
          {/* 'Y' */}
          <path d="M70 6L75 25L80 6H85L75 36V53H70V36L60 6H65Z" />
          {/* 'S' */}
          <path d="M100 53C93 53 90 48 90 43H95C95 46 98 48 100 48C104 48 106 46 106 43C106 39 101 38 98 37C92 35 90 32 90 27C90 23 93 19 100 19C106 19 109 24 109 28H105C105 26 103 23 100 23C98 23 96 25 96 27C96 30 101 32 105 33C109 35 112 38 112 43C112 49 108 53 100 53Z" />
          {/* 'L' */}
          <path d="M120 6H125V48H140V53H120V6Z" />
          {/* 'I' */}
          <path d="M155 6H160V53H155V6Z" />
          {/* 'P' */}
          <path d="M170 53V6H180C185 6 190 10 190 16C190 22 185 26 180 26H175V53H170Z" />
        </mask>
        <path
          d="M5 53V6H15C20 6 25 10 25 16C25 22 20 26 15 26H10V53H5Z"
          stroke="white"
          strokeWidth="10"
          mask="url(#path-1-outside-1_1_6)"
        />
        <path
          d="M35 53L45 6H50L60 53H55L51 36H44L41 53H35ZM47 31L49 21L51 31H47Z"
          stroke="white"
          strokeWidth="10"
          mask="url(#path-1-outside-1_1_6)"
        />
        <path
          d="M70 6L75 25L80 6H85L75 36V53H70V36L60 6H65Z"
          stroke="white"
          strokeWidth="10"
          mask="url(#path-1-outside-1_1_6)"
        />
        <path
          d="M100 53C93 53 90 48 90 43H95C95 46 98 48 100 48C104 48 106 46 106 43C106 39 101 38 98 37C92 35 90 32 90 27C90 23 93 19 100 19C106 19 109 24 109 28H105C105 26 103 23 100 23C98 23 96 25 96 27C96 30 101 32 105 33C109 35 112 38 112 43C112 49 108 53 100 53Z"
          stroke="white"
          strokeWidth="10"
          mask="url(#path-1-outside-1_1_6)"
        />
        <path
          d="M120 6H125V48H140V53H120V6Z"
          stroke="white"
          strokeWidth="10"
          mask="url(#path-1-outside-1_1_6)"
        />
        <path
          d="M155 6H160V53H155V6Z"
          stroke="white"
          strokeWidth="10"
          mask="url(#path-1-outside-1_1_6)"
        />
        <path
          d="M170 53V6H180C185 6 190 10 190 16C190 22 185 26 180 26H175V53H170Z"
          stroke="white"
          strokeWidth="10"
          mask="url(#path-1-outside-1_1_6)"
        />
      </svg>
    </div>
  );
};
export default Loading;
