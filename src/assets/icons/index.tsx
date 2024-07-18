import { SVGProps } from 'react';

export type IconType = JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>;

const ICONS = {
  Facebook: (props: IconType) => (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth={0}
      viewBox="0 0 1024 1024"
      height="1em"
      width="1em"
      {...props}
    >
      <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-92.4 233.5h-63.9c-50.1 0-59.8 23.8-59.8 58.8v77.1h119.6l-15.6 120.7h-104V912H539.2V602.2H434.9V481.4h104.3v-89c0-103.3 63.1-159.6 155.3-159.6 44.2 0 82.1 3.3 93.2 4.8v107.9z" />
    </svg>
  ),
  Instagram: (props: IconType) => (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth={0}
      viewBox="0 0 1024 1024"
      height="1em"
      width="1em"
      {...props}
    >
      <path d="M512 306.9c-113.5 0-205.1 91.6-205.1 205.1S398.5 717.1 512 717.1 717.1 625.5 717.1 512 625.5 306.9 512 306.9zm0 338.4c-73.4 0-133.3-59.9-133.3-133.3S438.6 378.7 512 378.7 645.3 438.6 645.3 512 585.4 645.3 512 645.3zm213.5-394.6c-26.5 0-47.9 21.4-47.9 47.9s21.4 47.9 47.9 47.9 47.9-21.3 47.9-47.9a47.84 47.84 0 0 0-47.9-47.9zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zm-88 235.8c-7.3 18.2-16.1 31.8-30.2 45.8-14.1 14.1-27.6 22.9-45.8 30.2C695.2 844.7 570.3 840 512 840c-58.3 0-183.3 4.7-235.9-16.1-18.2-7.3-31.8-16.1-45.8-30.2-14.1-14.1-22.9-27.6-30.2-45.8C179.3 695.2 184 570.3 184 512c0-58.3-4.7-183.3 16.1-235.9 7.3-18.2 16.1-31.8 30.2-45.8s27.6-22.9 45.8-30.2C328.7 179.3 453.7 184 512 184s183.3-4.7 235.9 16.1c18.2 7.3 31.8 16.1 45.8 30.2 14.1 14.1 22.9 27.6 30.2 45.8C844.7 328.7 840 453.7 840 512c0 58.3 4.7 183.2-16.2 235.8z" />
    </svg>
  ),
  Twitter: (props: IconType) => (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth={0}
      viewBox="0 0 1024 1024"
      height="1em"
      width="1em"
      {...props}
    >
      <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM727.3 401.7c.3 4.7.3 9.6.3 14.4 0 146.8-111.8 315.9-316.1 315.9-63 0-121.4-18.3-170.6-49.8 9 1 17.6 1.4 26.8 1.4 52 0 99.8-17.6 137.9-47.4-48.8-1-89.8-33-103.8-77 17.1 2.5 32.5 2.5 50.1-2a111 111 0 0 1-88.9-109v-1.4c14.7 8.3 32 13.4 50.1 14.1a111.13 111.13 0 0 1-49.5-92.4c0-20.7 5.4-39.6 15.1-56a315.28 315.28 0 0 0 229 116.1C492 353.1 548.4 292 616.2 292c32 0 60.8 13.4 81.1 35 25.1-4.7 49.1-14.1 70.5-26.7-8.3 25.7-25.7 47.4-48.8 61.1 22.4-2.4 44-8.6 64-17.3-15.1 22.2-34 41.9-55.7 57.6z" />
    </svg>
  ),
  Linkedin: (props: IconType) => (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth={0}
      viewBox="0 0 1024 1024"
      height="1em"
      width="1em"
      {...props}
    >
      <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1 1 68.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z" />
    </svg>
  ),
  Menu: (props: IconType) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4 6h16M4 12h16M4 18h7"
      />
    </svg>
  ),
  Close: (props: IconType) => (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 16 16"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.116 8l-4.558 4.558.884.884L8 8.884l4.558 4.558.884-.884L8.884 8l4.558-4.558-.884-.884L8 7.116 3.442 2.558l-.884.884L7.116 8z"
      ></path>
    </svg>
  ),
  Glob: (props: IconType) => (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 24 24"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill="none"
        stroke="#000"
        strokeWidth="2"
        d="M12,23 C18.0751322,23 23,18.0751322 23,12 C23,5.92486775 18.0751322,1 12,1 C5.92486775,1 1,5.92486775 1,12 C1,18.0751322 5.92486775,23 12,23 Z M12,23 C15,23 16,18 16,12 C16,6 15,1 12,1 C9,1 8,6 8,12 C8,18 9,23 12,23 Z M2,16 L22,16 M2,8 L22,8"
      ></path>
    </svg>
  ),
  Search: (props: IconType) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
      />
    </svg>
  ),
  Notification: (props: IconType) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
      />
    </svg>
  ),
  Profile: (props: IconType) => (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 448 512"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path>
    </svg>
  ),
  ChevronUp: (props: IconType) => (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth={0}
      viewBox="0 0 16 16"
      height="1em"
      width="1em"
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M7.646 4.646a.5.5 0 01.708 0l6 6a.5.5 0 01-.708.708L8 5.707l-5.646 5.647a.5.5 0 01-.708-.708l6-6z"
        clipRule="evenodd"
      />
    </svg>
  ),
  ChevronDown: (props: IconType) => (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth={0}
      viewBox="0 0 16 16"
      height="1em"
      width="1em"
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M1.646 4.646a.5.5 0 01.708 0L8 10.293l5.646-5.647a.5.5 0 01.708.708l-6 6a.5.5 0 01-.708 0l-6-6a.5.5 0 010-.708z"
        clipRule="evenodd"
      />
    </svg>
  ),
  ChevronLeft: (props: IconType) => (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth={0}
      viewBox="0 0 16 16"
      height="1em"
      width="1em"
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M11.354 1.646a.5.5 0 010 .708L5.707 8l5.647 5.646a.5.5 0 01-.708.708l-6-6a.5.5 0 010-.708l6-6a.5.5 0 01.708 0z"
        clipRule="evenodd"
      />
    </svg>
  ),
  ChevronRight: (props: IconType) => (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth={0}
      viewBox="0 0 16 16"
      height="1em"
      width="1em"
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M4.646 1.646a.5.5 0 01.708 0l6 6a.5.5 0 010 .708l-6 6a.5.5 0 01-.708-.708L10.293 8 4.646 2.354a.5.5 0 010-.708z"
        clipRule="evenodd"
      />
    </svg>
  ),

  DashPayment: (props: IconType) => (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 24 24"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g>
        <path fill="none" d="M0 0h24v24H0z"></path>
        <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-3.5-6H14a.5.5 0 1 0 0-1h-4a2.5 2.5 0 1 1 0-5h1V6h2v2h2.5v2H10a.5.5 0 1 0 0 1h4a2.5 2.5 0 1 1 0 5h-1v2h-2v-2H8.5v-2z"></path>
      </g>
    </svg>
  ),

  DashReport: (props: IconType) => (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 16 16"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M4 11H2v3h2v-3zm5-4H7v7h2V7zm5-5h-2v12h2V2zm-2-1a1 1 0 00-1 1v12a1 1 0 001 1h2a1 1 0 001-1V2a1 1 0 00-1-1h-2zM6 7a1 1 0 011-1h2a1 1 0 011 1v7a1 1 0 01-1 1H7a1 1 0 01-1-1V7zm-5 4a1 1 0 011-1h2a1 1 0 011 1v3a1 1 0 01-1 1H2a1 1 0 01-1-1v-3z"
        clipRule="evenodd"
      ></path>
    </svg>
  ),
  advertiser: (props: IconType) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M19.875 6.27a2.225 2.225 0 0 1 1.125 1.948v7.284c0 .809 -.443 1.555 -1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1 -2.184 0l-6.75 -4.27a2.225 2.225 0 0 1 -1.158 -1.948v-7.285c0 -.809 .443 -1.554 1.158 -1.947l6.75 -3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033z" />
      <path d="M15.5 9.43a1 1 0 0 1 .5 .874v3.268a1 1 0 0 1 -.515 .874l-3 1.917a1 1 0 0 1 -.97 0l-3 -1.917a1 1 0 0 1 -.515 -.873v-3.269a1 1 0 0 1 .514 -.874l3 -1.786c.311 -.173 .69 -.173 1 0l3 1.787h-.014z" />
      <path d="M12 21v-9l-7.5 -4.5" />
      <path d="M12 12l7.5 -4.5" />
      <path d="M12 3v4.5" />
      <path d="M19.5 16l-3.5 -2" />
      <path d="M8 14l-3.5 2" />
    </svg>
  ),
  promoter: (props: IconType) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M5 3m0 2a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2z" />
      <path d="M9 7l6 0" />
      <path d="M9 11l6 0" />
      <path d="M9 15l4 0" />
    </svg>
  ),
  dollor: (props: IconType) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
      <path d="M14.8 9a2 2 0 0 0 -1.8 -1h-2a2 2 0 1 0 0 4h2a2 2 0 1 1 0 4h-2a2 2 0 0 1 -1.8 -1" />
      <path d="M12 7v10" />
    </svg>
  ),
  DashPrograms: (props: IconType) => (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 24 24"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M21.406,6.086l-9-4c-0.26-0.115-0.553-0.115-0.813,0l-9,4C2.573,6.095,2.559,6.11,2.539,6.121 c-0.028,0.014-0.058,0.023-0.084,0.04c-0.022,0.015-0.039,0.034-0.06,0.05c-0.028,0.021-0.055,0.044-0.08,0.068 C2.274,6.318,2.238,6.36,2.205,6.405C2.185,6.433,2.164,6.458,2.146,6.486C2.115,6.539,2.092,6.594,2.07,6.651 C2.061,6.678,2.047,6.703,2.039,6.73C2.015,6.817,2,6.907,2,7v10c0,0.396,0.232,0.753,0.594,0.914l9,4 C11.724,21.972,11.862,22,12,22c0.139,0,0.273-0.039,0.402-0.096l0.004,0.01l9-4C21.768,17.753,22,17.396,22,17V7 C22,6.604,21.768,6.247,21.406,6.086z M12,4.095L18.538,7L12,9.905l-1.308-0.581L5.463,7L12,4.095z M4,16.351V8.539l7,3.111v7.811 L4,16.351z M13,19.461V11.65l7-3.111v7.812L13,19.461z"></path>
    </svg>
  ),

  location: (props: IconType) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
      <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
    </svg>
  ),
  sale: (props: IconType) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" />
      <path d="M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" />
      <path d="M14 11h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5" />
      <path d="M12 17v1m0 -8v1" />
    </svg>
  ),
  Recept: (props: IconType) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16l-3 -2l-2 2l-2 -2l-2 2l-2 -2l-3 2" />
      <path d="M14 8h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5m2 0v1.5m0 -9v1.5" />
    </svg>
  ),
  Purchase: (props: IconType) => (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M3 5m0 3a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3z" />
      <path d="M3 10l18 0" />
      <path d="M7 15l.01 0" />
      <path d="M11 15l2 0" />
    </svg>
  ),
  Payment: (props: IconType) => (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M17.1 8.648a.568 .568 0 0 1 -.761 .011a5.682 5.682 0 0 0 -3.659 -1.34c-1.102 0 -2.205 .363 -2.205 1.374c0 1.023 1.182 1.364 2.546 1.875c2.386 .796 4.363 1.796 4.363 4.137c0 2.545 -1.977 4.295 -5.204 4.488l-.295 1.364a.557 .557 0 0 1 -.546 .443h-2.034l-.102 -.011a.568 .568 0 0 1 -.432 -.67l.318 -1.444a7.432 7.432 0 0 1 -3.273 -1.784v-.011a.545 .545 0 0 1 0 -.773l1.137 -1.102c.214 -.2 .547 -.2 .761 0a5.495 5.495 0 0 0 3.852 1.5c1.478 0 2.466 -.625 2.466 -1.614c0 -.989 -1 -1.25 -2.886 -1.954c-2 -.716 -3.898 -1.728 -3.898 -4.091c0 -2.75 2.284 -4.091 4.989 -4.216l.284 -1.398a.545 .545 0 0 1 .545 -.432h2.023l.114 .012a.544 .544 0 0 1 .42 .647l-.307 1.557a8.528 8.528 0 0 1 2.818 1.58l.023 .022c.216 .228 .216 .569 0 .773l-1.057 1.057z" />
    </svg>
  ),
  fund: (props: IconType) => (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16l-3 -2l-2 2l-2 -2l-2 2l-2 -2l-3 2" />
      <path d="M15 14v-2a2 2 0 0 0 -2 -2h-4l2 -2m0 4l-2 -2" />
    </svg>
  ),
  closeIng: (props: IconType) => (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M20.997 12.25a9 9 0 1 0 -8.718 8.745" />
      <path d="M19 19m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
      <path d="M17 21l4 -4" />
      <path d="M12 7v5l2 2" />
    </svg>
  ),
  opening: (props: IconType) => (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M20.87 10.48a9 9 0 1 0 -7.876 10.465" />
      <path d="M9 10h.01" />
      <path d="M15 10h.01" />
      <path d="M9.5 15c.658 .64 1.56 1 2.5 1c.357 0 .709 -.052 1.043 -.151" />
      <path d="M21 15h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5" />
      <path d="M19 21v1m0 -8v1" />
    </svg>
  ),
  upload: (props: IconType) => (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M14 3v4a1 1 0 0 0 1 1h4" />
      <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
      <path d="M12 11v6" />
      <path d="M9.5 13.5l2.5 -2.5l2.5 2.5" />
    </svg>
  ),
  Report: (props: IconType) => (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" />
      <path d="M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" />
      <path d="M9 17v-5" />
      <path d="M12 17v-1" />
      <path d="M15 17v-3" />
    </svg>
  )
};

export default ICONS;
