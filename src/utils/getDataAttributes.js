import dlv from "dlv";

export default function getDataAttribute(data, attribute) {
  return attribute
    ? dlv(data, `attributes.${attribute}`)
    : dlv(data, `attributes`);
}
