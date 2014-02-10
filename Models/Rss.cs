using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
//using 

namespace RssReader.Models
{
    public class Rss
    {
         public string Link { get; set; }
        public string Title { get; set; } 
        public string Description { get; set; }
        public string Date {get; set; }
        
        
        //erm how do we do this is it an image or a string wtf?
        public string Image { get; set; }
         

    }
}