import dlv from "dlv";

const getMediaUrl = (media, withThumbNail = false) => {
  const { url } = withThumbNail
    ? dlv(media, "data.attributes.formats.thumbnail")
    : dlv(media, "data.attributes");
  return `${process.env.NEXT_PUBLIC_ASSET_URL}${url}`;
};

export default getMediaUrl;
