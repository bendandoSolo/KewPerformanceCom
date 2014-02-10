using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace RssReader.Controllers
{
    public class BlogController : Controller
    {
        //
        // GET: /Blog/

        public ActionResult Blog()
        {
            //return View();
            IEnumerable<Models.Rss> data = null;
            try
            {
                data = RssReader.Models.RssReader.GetRssFeed();
            }
            catch { }

            //return View();
            return View(data);
        }

    }
}
