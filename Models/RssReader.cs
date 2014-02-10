using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Xml.Linq;
using System.Text.RegularExpressions;


   
namespace RssReader.Models
{
    public class RssReader
    {
        private static string blogURL = "http://kewperformance.blogspot.co.uk/feeds/posts/default?alt=rss";

        public static IEnumerable<Rss> GetRssFeed()
        {
            XDocument feedXml = XDocument.Load(blogURL);

            Console.Write(feedXml.ToString());
            
            var feeds = from feed in feedXml.Descendants("item") 
                        select new Rss
                        { Title = feed.Element("title").Value, Link = feed.Element("link").Value,
                          Description = feed.Element("description").Value,
                          Image = feed.Element("image") == null ? "" : feed.Element("image").Value,
                        Date = (string)(feed.Element("pubDate").Value).TrimEnd('0').TrimEnd('+')

                        };

            return feeds.Select(f => new Rss()
            {
                Title = f.Title,
                Image = f.Image,
                Date = f.Date,
                Description = f.Description,
                // Description = Rexex.Replace(... f.Description ...),
                //Description = f.Description.Length > 100 ? f.Description.Substring(0, 97) + "..." : f.Description,
            });

            /*
            foreach (var feed in feeds.Select(f => new { f.Title, f.Image, f.Date, 
                f.Description
                // Description = Regex.Replace(... f.Description)
                }))
            {

                
            
            }
            // = Regex.Match(feed.Element("description").Value, @"^.{1,180}\b(?<!\s)").Value

            Console.Write(feeds);
            return feeds; 
            //*/
        }
         
    }
}