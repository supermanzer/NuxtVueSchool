export const state = () => ({
  all: [
    {
      id: 'todo-cla',
      title: 'TODO CLA',
      content: `I use TODO comments quite frequently to capture where in my code there is still work...to do.  
          After a while I realized how many of these handy reminders had gone unnoticed for some time.
          I decided I wanted to fix that and it seemed like a good opportunity to teach myself a little bit
          about creating command line applications in Python (my favorite language).  Initially it was quite simple,
          use the os module and specifically the walk function to recursively examine all the files and
          directories in a given root directory and scan them for the characters TODO.  Eventually I realized just
          how many node_modules packages were full of TODO comments.  I first added some parameters to the function call..`,
    },
    {
      id: 'buoy-reader',
      title: 'NDBC Data Reader',
      content: `I conceived of, and initially built, this project as part of my thesis research for my M.Sc.  
            Originally written in MATLAB, it seeks to automate the collection of standard meterological data from NDBC data buoys for any given span of time.
            The current implementation is in Python and it loads the data into a pandas dataframe to ensure it is suitable for analysis afterwards.`,
    },
    {
      id: 'fetch-js',
      title: 'Fetch JS Module',
      content: `After seeing a lot of back and forth on the internet about whether to use tools like jQuery, axios,
       or vanilla JS I decided to try my hand at replacing jQeuy with my own vanilla JS module used to
       get/send/display data via asynchoronous requests.  I used the native Fetch API and incorporated global event
       listening to allow to link these actions to html elements via class names and use of the data- DOMString object.`,
    },
  ],
})
