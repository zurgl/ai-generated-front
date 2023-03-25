import type { ReactElement } from "react";

export function PlanIcon({
  theme,
  windowSize,
}: {
  theme: String;
  windowSize: {
    width: number;
    height: number;
  };
}): ReactElement {
  console.log(windowSize);
  const { width, height } = windowSize;
  return (
    <svg
      fill={theme === "dark" ? "#fff" : "#000"}
      xmlns="http://www.w3.org/2000/svg"
      // width={`${width * 0.31}px`}
      // height={`${height * 0.6}px`}
      width="500px"
      height="500px"
      //viewBox={`0 0 ${width * 0.5} ${height * 0.5}`}
      //transform={`scale(1 1) translate(${width} ${height})`}
    >
      <g>
        <path d="M288.015,13.647c-2.038-4.951-9.888-0.119-6.173,3.611C283.893,20.643,289.352,16.894,288.015,13.647z" />
        <path d="M294.441,4.896c-2.476-3.143-7.8,1.043-4.756,3.699C292.219,11.08,296.696,7.751,294.441,4.896z" />
        <path d="M271.102,58.532c1.876-1.457-1.043-3.623-1.952-1.769C268.715,57.644,270.056,59.958,271.102,58.532z" />
        <path d="M289.593,26.726c3.302,1.793,6.84-2.313,4.591-5.321C290.857,16.992,284.906,24.18,289.593,26.726z" />
        <path d="M297.397,17.121c5.146-0.9,1.658-10.251-3.128-6.108C291.356,13.234,293.847,18.066,297.397,17.121z" />
        <path d="M271.215,63.152c1.408-1.038,0.422-3.804-1.365-3.097C267.699,60.447,268.862,64.309,271.215,63.152z" />
        <path d="M301.207,7.659c2.94-3.008-3.216-6.154-3.963-2.463C296.76,7.592,299.296,9.009,301.207,7.659z" />
        <path d="M275.759,61.487c1.481-1.493,0.701-4.66-1.802-3.791C271.334,58.721,273.208,62.635,275.759,61.487z" />
        <path d="M273.477,66.411c1.821,1.215,4.373-0.872,2.974-2.843C274.747,60.83,271.099,64.826,273.477,66.411z" />
        <path d="M281.065,64.728c2.345-1.86-0.945-4.969-2.662-2.94C276.913,63.55,279.128,65.878,281.065,64.728z" />
        <path d="M277.179,69.006c0.649,2.641,4.921,0.9,3.599-1.582C279.787,65.493,276.448,66.806,277.179,69.006z" />
        <path d="M245.199,162.715c-1.818-2.237-4.884,1.102-2.463,2.482C244.354,166.118,246.093,164.334,245.199,162.715z" />
        <path d="M331.666,86.307c1.619,0.921,3.356-0.863,2.463-2.481C332.314,81.589,329.246,84.927,331.666,86.307z" />
        <path d="M251.484,166.99c3.014-1.447-1.046-6.34-3.112-3.164C247.173,165.671,249.566,168.41,251.484,166.99z" />
        <path d="M324.778,81.824c-1.2,1.845,1.196,4.584,3.111,3.164C330.907,83.538,326.846,78.645,324.778,81.824z" />
        <path d="M248.167,174.08c2.35,2.424,5.838-0.817,4.477-3.595C250.53,167.109,245.364,171.191,248.167,174.08z" />
        <path d="M254.667,166.675c-1.94,2.996,1.346,6.778,4.516,4.884C263.345,168.386,257.142,162.862,254.667,166.675z" />
        <path d="M255,179.371c2.417,3.008,7.476-0.584,5.453-3.994C258.348,171.274,252.201,175.889,255,179.371z" />
        <path d="M263.682,172.183c-2.883,2.546,0.866,7.332,4.128,5.049C271.334,174.441,267.247,169.037,263.682,172.183z" />
        <path d="M262.121,185.567c2.524,3.011,7.209-0.857,5.266-4.165C264.639,178.049,259.146,182.012,262.121,185.567z" />
        <path d="M315.505,91.58c-3.06-1.466-5.006,3.476-2.209,5.003C316.286,97.409,318.701,93.027,315.505,91.58z" />
        <path d="M319.658,90.484c2.877,1.319,5.064-3.58,2.1-4.981C318.792,84.594,316.433,88.936,319.658,90.484z" />
        <path d="M315.505,102.944c3.283,1.188,5.205-3.43,2.24-4.899C314.738,97.421,312.241,101.424,315.505,102.944z" />
        <path d="M323.877,95.57c1.57-3.234-3.411-4.795-4.841-1.913C317.708,96.874,322.519,98.52,323.877,95.57z" />
        <path d="M324.64,88.593c-0.985,2.867,2.763,4.474,4.051,1.57C330,87.412,325.891,86.191,324.64,88.593z" />
        <path d="M231.188,418.345c-2.623,1.854,1.303,5.034,2.656,2.564C234.667,419.4,232.745,417.219,231.188,418.345z" />
        <path d="M236.732,429.927c1.75-2.057-0.783-5.178-3.173-3.923C230.049,427.24,233.883,433.269,236.732,429.927z" />
        <path d="M245.282,433.314c3.966-1.549-0.242-7.993-3.703-4.93C239.027,430.649,242.277,435.72,245.282,433.314z" />
        <path d="M240.211,443.015c2.99,3.375,8.314-0.569,6.463-4.522C243.434,434.565,236.206,438.492,240.211,443.015z" />
        <path d="M250.355,432.929c-4.314,3.234,0.303,10.08,5.086,7.586C260.68,437.396,255.518,429.052,250.355,432.929z" />
        <path d="M249,450.802c2.91,4.541,10.267-0.238,7.809-5.049C254.453,440.12,245.768,445.759,249,450.802z" />
        <path d="M266.993,449.189c5.324-3.054,0.076-11.273-5.067-7.519C257.562,444.866,262.24,451.766,266.993,449.189z" />
        <path d="M258.198,459.964c3.081,4.479,10.199-0.092,7.739-4.976C262.941,449.74,254.609,454.743,258.198,459.964z" />
        <path
          d="M265.092,188.637c5.077,1.558,11.288-3.274,16.294-2.065c-1.777-1.249-3.381-2.681-4.195-4.743
			c-1.75-4.443-1.215-8.354-5.949-11.126c2.519,3.923-2.644,9.284,1.047,12.674C272.25,183.333,265.092,187.927,265.092,188.637z"
        />
        <path d="M327.889,370.786c-2.576,1.971,0.175,6.466,2.926,4.755C333.869,373.647,330.623,368.345,327.889,370.786z" />
        <path d="M334.705,365.508c-1.797-3.437-6.754-0.251-4.719,2.794C331.932,370.891,336.207,368.375,334.705,365.508z" />
        <path d="M337.593,373.599c3.341-1.414,0.44-5.413-2.335-4.122C333.232,371.138,335.099,374.651,337.593,373.599z" />
        <path d="M326.173,367.252c-1.818-3.366-6.787-0.27-4.691,2.763C323.388,372.641,327.712,370.11,326.173,367.252z" />
        <path d="M320.554,373.43c-2.598,2.011,0.077,6.328,2.904,4.7C326.754,376.227,323.532,371.361,320.554,373.43z" />
        <path d="M340.634,365.314c-1.083-2.555-5.03-0.152-3.28,1.714C338.361,369.109,341.433,367.203,340.634,365.314z" />
        <path d="M342.865,367.405c0.68,2.549,4.315,0.272,2.733-1.304C344.627,364.801,342.446,365.835,342.865,367.405z" />
        <path d="M206.365,275.868c-0.799,1.888,2.273,3.794,3.283,1.713C211.396,275.718,207.445,273.313,206.365,275.868z" />
        <path d="M209.409,284.151c2.494,1.056,4.357-2.46,2.335-4.122C208.969,278.738,206.068,282.738,209.409,284.151z" />
        <path d="M212.295,276.061c-1.502,2.87,2.772,5.385,4.719,2.793C219.048,275.81,214.091,272.625,212.295,276.061z" />
        <path d="M204.134,277.958c0.417-1.567-1.762-2.604-2.732-1.304C199.819,278.23,203.458,280.507,204.134,277.958z" />
        <path d="M223.541,288.68c2.831,1.631,5.502-2.689,2.907-4.7C223.467,281.915,220.245,286.783,223.541,288.68z" />
        <path d="M216.184,286.098c2.751,1.708,5.502-2.785,2.925-4.755C216.377,278.897,213.13,284.2,216.184,286.098z" />
        <path d="M220.829,277.805c-1.539,2.861,2.782,5.392,4.691,2.763C227.613,277.536,222.644,274.439,220.829,277.805z" />
        <path d="M206.34,158.064c1.787,0.523,3.069-1.61,1.827-2.98C205.884,153.324,203.666,157.278,206.34,158.064z" />
        <path d="M202.362,157.645c2.601-2.102-2.476-5.93-3.755-2.362C197.861,157.351,200.82,159.469,202.362,157.645z" />
        <path d="M190.823,172.281c3.1,0.12,4.44-4.7,1.001-5.376C188.51,166.183,187.748,171.442,190.823,172.281z" />
        <path d="M195.612,164.888c3.103,0.621,4.106-4.648,0.896-5.331C193.415,159.353,192.117,164.12,195.612,164.888z" />
        <path d="M194.431,177.966c3.47,0.404,4.278-4.535,1.056-5.281C192.414,172.768,190.906,177.238,194.431,177.966z" />
        <path d="M200.887,168.866c0.783-3.507-4.422-3.883-5.15-0.75C195.18,171.55,200.242,172.051,200.887,168.866z" />
        <path d="M200.024,161.904c-0.3,3.018,3.715,3.721,4.302,0.597C204.972,159.521,200.691,159.279,200.024,161.904z" />
        <path
          d="M203.005,255.638c-0.376-0.906-1.206-1.732-2.402-2.301c-2.276-1.08-5.636-1.062-8.742-0.462
			c-4.137,0.799-7.433,2.476-10.374,4.4c-3.317,2.169-6.625,4.293-10.184,6.34c4.002,0.915,7.788,1.971,11.594,3.075
			c3.375,0.977,7.02,1.613,11.209,1.163c3.146-0.337,6.362-1.307,8.222-3.005c0.866-0.792,1.346-1.668,1.545-2.537
			c8.978,1.763,17.445,5.123,25.116,9.945c3.369,3.807,6.812,7.577,10.401,11.279c-6.845-1.006-6.539-8.001-13.253-9.051
			c2.721,2.194,0.872,8.43,4.804,9.318c-1.102,0.04-3.506,5.422-4.088,6.423c3.608-0.337,6.095-2.212,8.295-4.954
			c1.089-1.355,1.907-1.741,3.645-1.249c2.938,0.829,5.398,5.847,7.09,8.311c1.86,2.711,3.629,5.489,5.309,8.313
			c3.369,5.634,6.814,11.595,9.208,17.742c-1.748,36.258,3.957,71.301,13.333,106.005c-7.054-9.303-15.465-17.534-25.102-24.453
			c-0.003-0.039-0.009-0.079-0.012-0.119c1.08-1.401,2.506-2.457,2.61-4.247c0.083-1.484-0.499-3.161-1.76-4.73
			c-2.393-2.98-6.992-5.175-11.631-6.408c-6.175-1.643-11.784-1.533-17.069-0.848c-5.964,0.771-11.882,1.484-18.094,1.928
			c4.859,3.893,9.33,7.84,13.801,11.861c3.962,3.564,8.519,6.839,14.532,8.993c4.52,1.618,9.547,2.424,13.213,1.328
			c1.704-0.508,2.94-1.39,3.782-2.442c12.301,9.244,22.405,20.793,29.979,34.067c2.424,8.1,5.006,16.19,7.729,24.278
			c-9.565-6.423-4.085-16.717-13.421-23.109c2.512,5.251-4.737,13.296,0.532,17.448c-1.686-0.734-9.155,5.633-10.753,6.717
			c5.667,2.08,10.747,1.049,16.022-1.494c2.613-1.254,4.112-1.251,6.371,0.741c3.821,3.354,3.92,12.659,4.69,17.573
			c0.854,5.41,1.518,10.851,2.014,16.301c1.064,11.344,2.05,23.299,1.04,34.676c-0.281,3.188-1.312,7.405,1.316,9.942
			c0,0,0.003,0.003,0.006,0.003c-66.209,0.089-119.808,19.376-119.808,43.161h240.535c0-22.246-46.897-40.558-107.144-42.904
			c1.864-9.073,3.204-18.244,3.761-27.497c1.025-12.913,0.53-25.683-1.095-38.293c7.886-16.145,19.312-30.031,33.685-40.829
			c0.851,1.062,2.099,1.952,3.821,2.466c3.7,1.104,8.779,0.291,13.342-1.344c6.074-2.175,10.673-5.479,14.676-9.082
			c4.514-4.061,9.027-8.044,13.936-11.977c-6.271-0.449-12.249-1.166-18.271-1.946c-5.337-0.691-11.001-0.802-17.237,0.857
			c-4.685,1.245-9.326,3.461-11.744,6.472c-1.272,1.585-1.863,3.277-1.777,4.776c0.104,1.809,1.542,2.877,2.634,4.29
			c-0.003,0.04-0.009,0.08-0.012,0.119c-14.192,10.19-25.75,23.195-34.201,38.312c-3.342-20.07-9.419-39.719-16.809-58.85
			c-0.992-2.543-1.932-5.098-2.85-7.659c2.065-4.254,4.471-8.403,6.849-12.381c1.68-2.824,3.445-5.603,5.309-8.314
			c1.689-2.463,4.149-7.481,7.091-8.311c1.737-0.493,2.552-0.107,3.645,1.248c2.199,2.742,4.685,4.618,8.295,4.954
			c-0.584-1-2.986-6.383-4.088-6.423c3.933-0.887,2.084-7.123,4.805-9.317c-6.714,1.05-6.408,8.045-13.253,9.052
			c1.169-1.206,2.276-2.445,3.424-3.66c9.762-8.351,21.312-13.936,33.858-16.396c0.199,0.866,0.68,1.744,1.546,2.537
			c1.86,1.701,5.076,2.668,8.222,3.005c4.189,0.449,7.834-0.184,11.209-1.163c3.807-1.102,7.595-2.16,11.595-3.075
			c-3.559-2.047-6.867-4.171-10.184-6.34c-2.941-1.925-6.236-3.602-10.374-4.4c-3.105-0.6-6.466-0.618-8.742,0.462
			c-1.199,0.569-2.025,1.398-2.402,2.301c-0.452,1.093,0.089,2.13,0.328,3.271c-0.013,0.024-0.028,0.043-0.04,0.067
			c-9.141,1.588-17.778,4.782-25.683,9.388c17.509-20.257,31.906-42.225,42.228-67.754c6.157-15.227,11.044-61.417,11.044-61.417
			c-0.734,6.016-2.993,12.029-4.776,17.785c-2.647,8.528-5.459,17.004-8.317,25.462c-4.382,12.972-9.088,25.499-16.233,37.256
			c-7.2,11.845-16.104,22.604-26.175,32.114c-13.74,12.975-26.13,27.396-34.257,44.446c-4.875-16.604-8.097-33.562-9.413-50.786
			c7.718-19.357,20.315-35.86,36.821-48.263c0.842,1.053,2.081,1.934,3.785,2.442c3.663,1.092,8.693,0.287,13.213-1.329
			c6.017-2.154,10.569-5.428,14.532-8.993c4.471-4.021,8.938-7.968,13.801-11.86c-6.212-0.444-12.13-1.157-18.094-1.928
			c-5.285-0.685-10.894-0.795-17.069,0.848c-4.639,1.233-9.234,3.427-11.631,6.408c-1.261,1.57-1.845,3.247-1.76,4.731
			c0.102,1.79,1.53,2.849,2.61,4.247c-0.003,0.04-0.009,0.08-0.012,0.12c-15.734,11.297-28.214,26.074-36.735,43.394
			c-0.175-5.661-0.181-11.341,0.085-17.054c1.821-39.088,11.111-77.537,20.376-115.408c4.379-17.895,8.097-35.866,9.776-54.236
			c0.854-9.333,1.215-18.678,0.787-28.042c-0.037-0.799-0.113-1.548-0.175-2.249c0.006-0.93,0.064-1.848,0.104-2.77
			c0.343-1.046,1.282-1.579,3.629-1.264c2.708,0.361,5.881,1.401,8.464-0.031c-2.279,1.484-6.328-3.002-6.35-4.764
			c-0.006-0.661-0.376-8.287-0.786-8.287c-3.908,3.626-1.598,9.823-4.902,12.797c0.863-13.342,5.211-25.949,12.684-36.919
			c0.75,0.478,1.708,0.765,2.88,0.719c2.519-0.095,5.486-1.667,7.962-3.638c3.296-2.623,5.443-5.634,7.157-8.703
			c1.934-3.461,3.886-6.873,6.093-10.334c-3.969,1.043-7.815,1.857-11.702,2.644c-3.445,0.694-6.967,1.821-10.471,4.159
			c-2.632,1.756-5.037,4.103-5.896,6.472c-0.453,1.246-0.463,2.417-0.092,3.326c0.443,1.096,1.558,1.454,2.53,2.096
			c0.006,0.024,0.013,0.052,0.019,0.077c-6.727,9.425-11.176,20.07-13.177,31.38c-3.103-17.103-6.53-34.293-15.661-49.352
			c-1.555-2.564-3.953-6.077-4.947-9.584c4.382-2.87,11.153-2.39,13.77-8.201c-0.985,2.512-10.561,1.613-13.018,1.772
			c-3.616,0.242-3.497-6.469-6.823-6.227c-0.453,2.362-0.242,4.764,0.523,6.983C265.992,17.696,251.75,5.955,235.422,0
			c28.896,14.376,48.369,42.066,56.91,72.541c-4.061-2.987-5.236-9.792-9.085-11.588c-0.315,0.863,0.346,7.699,0.544,7.607
			c-0.272-0.144-4.442,2.861-4.442,3.079c4.097,1.322,6.435-3.611,10.049-0.511c3.222,2.76,4.29,6.289,5.036,10.331
			c2.262,12.158,3.143,24.483,2.88,36.843c-0.505,22.742-5.146,45.123-10.909,67.057c-2.438-8.685-6.34-16.885-11.692-24.309
			c0.006-0.024,0.009-0.052,0.018-0.077c0.97-0.649,2.081-1.01,2.521-2.108c0.364-0.909,0.352-2.081-0.11-3.326
			c-0.873-2.365-3.287-4.7-5.927-6.444c-3.516-2.319-7.044-3.427-10.493-4.106c-3.889-0.768-7.738-1.563-11.713-2.589
			c2.222,3.452,4.189,6.854,6.141,10.306c1.729,3.06,3.89,6.062,7.2,8.669c2.485,1.958,5.462,3.516,7.98,3.602
			c1.172,0.04,2.13-0.251,2.876-0.734c5.554,8.069,9.382,17.05,11.402,26.558c-0.01,2.497-1.145,5.472-1.576,7.057
			c-1.763,6.432-3.479,12.876-5.122,19.339c-6.598,25.946-12.173,52.25-15.508,78.829c-8.127-16.429-20.171-30.435-33.525-43.045
			c-10.074-9.51-18.975-20.269-26.175-32.115c-7.145-11.756-11.854-24.284-16.233-37.255c-0.177-0.529-0.352-1.059-0.529-1.588
			c0.508-0.257,1.16-0.462,2.139-0.557c2.717-0.269,6.043,0.012,8.231-1.974c-1.879,1.968-6.849-1.469-7.274-3.179
			c-0.159-0.643-2.271-7.98-2.668-7.886c-2.509,3.736-0.291,8.234-1.044,11.75c-2.457-7.32-4.883-14.651-7.169-22.026
			c-1.787-5.756-4.042-11.772-4.776-17.785c0,0,4.887,46.19,11.043,61.417c9.657,23.883,22.846,44.67,38.84,63.838
			c-6.462-3.13-13.335-5.392-20.526-6.64c-0.012-0.024-0.027-0.043-0.04-0.067C202.916,257.768,203.461,256.731,203.005,255.638z"
        />
      </g>
    </svg>
  );
}