export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: "name",
      title: "Name",
      description: "Title of project",
      type: "string",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      }
    },
    {
      name: "projectInfo",
      title: "projectInfo",
      type: "string"
    },
    {
      name: "githubLinks",
      titles: "GithubLinks",
      type: "array",
      of: [{type: "string"}]
    },
    {
      name: "hostLinks",
      titles: "HostLinks",
      type: "array",
      of: [{type: "string"}]
    },
    {
      name: "tech",
      titles: "Tech",
      type: "array",
      of: [{type: "string"}]
    },
  ],

  
}
