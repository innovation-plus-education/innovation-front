import dlv from "dlv";

export default function getDataAttribute(data, attribute) {
  return dlv(data, `attributes.${attribute}`);
}
