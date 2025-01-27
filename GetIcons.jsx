import React, { lazy, Suspense } from "react";

const GetIcons = ({ iconName, libraryName }) => {
  const lib = libraryName.toLowerCase();
  let IconComponent = lazy(() =>
    import(`react-icons/ai`).then((res) => ({
      default: res[iconName],
    }))
  );
  if (lib === "bs") {
    IconComponent = lazy(() =>
      import(`react-icons/bs`).then((res) => ({
        default: res[iconName],
      }))
    );
  } else if (lib === "bi") {
    IconComponent = lazy(() =>
      import(`react-icons/bi`).then((res) => ({
        default: res[iconName],
      }))
    );
  } else if (lib === "di") {
    IconComponent = lazy(() =>
      import(`react-icons/di`).then((res) => ({
        default: res[iconName],
      }))
    );
  } else if (lib === "fi") {
    IconComponent = lazy(() =>
      import(`react-icons/fi`).then((res) => ({
        default: res[iconName],
      }))
    );
  } else if (lib === "fc") {
    IconComponent = lazy(() =>
      import(`react-icons/fc`).then((res) => ({
        default: res[iconName],
      }))
    );
  } else if (lib === "fa") {
    IconComponent = lazy(() =>
      import(`react-icons/fa`).then((res) => ({
        default: res[iconName],
      }))
    );
  } else if (lib === "gi") {
    IconComponent = lazy(() =>
      import(`react-icons/gi`).then((res) => ({
        default: res[iconName],
      }))
    );
  } else if (lib === "go") {
    IconComponent = lazy(() =>
      import(`react-icons/go`).then((res) => ({
        default: res[iconName],
      }))
    );
  } else if (lib === "gr") {
    IconComponent = lazy(() =>
      import(`react-icons/gr`).then((res) => ({
        default: res[iconName],
      }))
    );
  } else if (lib === "hi") {
    IconComponent = lazy(() =>
      import(`react-icons/hi`).then((res) => ({
        default: res[iconName],
      }))
    );
  } else if (lib === "im") {
    IconComponent = lazy(() =>
      import(`react-icons/im`).then((res) => ({
        default: res[iconName],
      }))
    );
  } else if (lib === "io") {
    IconComponent = lazy(() =>
      import(`react-icons/io`).then((res) => ({
        default: res[iconName],
      }))
    );
  } else if (lib === "md") {
    IconComponent = lazy(() =>
      import(`react-icons/md`).then((res) => ({
        default: res[iconName],
      }))
    );
  } else if (lib === "ri") {
    IconComponent = lazy(() =>
      import(`react-icons/ri`).then((res) => ({
        default: res[iconName],
      }))
    );
  } else if (lib === "si") {
    IconComponent = lazy(() =>
      import(`react-icons/si`).then((res) => ({
        default: res[iconName],
      }))
    );
  } else if (lib === "ti") {
    IconComponent = lazy(() =>
      import(`react-icons/ti`).then((res) => ({
        default: res[iconName],
      }))
    );
  } else if (lib === "vsc") {
    IconComponent = lazy(() =>
      import(`react-icons/vsc`).then((res) => ({
        default: res[iconName],
      }))
    );
  } else if (lib === "wi") {
    IconComponent = lazy(() =>
      import(`react-icons/wi`).then((res) => ({
        default: res[iconName],
      }))
    );
  } else if (lib === "cg") {
    IconComponent = lazy(() =>
      import(`react-icons/cg`).then((res) => ({
        default: res[iconName],
      }))
    );
  }
  
  return (
    <Suspense>
      <IconComponent />
    </Suspense>
  );
};

export default GetIcons;
