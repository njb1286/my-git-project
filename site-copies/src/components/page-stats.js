export default function(stats = {
    title: "React Application",
    bodyStyles: ""
}) {
    stats.title ? document.title = stats.title : "React Application";
    stats.bodyStyles ? document.body.style = stats.bodyStyles : ""
}