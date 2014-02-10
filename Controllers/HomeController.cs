using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace RssReader.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            //IEnumerable<Models.Rss> data = null;
            //try
            //{
            //    data = RssReader.Models.RssReader.GetRssFeed();
            //}
            //catch { }
            
            return View();
            //return View("index", data);
        }
    }
}
