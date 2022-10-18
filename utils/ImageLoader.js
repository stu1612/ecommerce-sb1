export default function ImageLoader({ src, width }) {
  const relativeSrc = (src) => src.split("/").pop();
  return `https://media.graphcms.com/resize=width:${width}/${relativeSrc(src)}`;
}
