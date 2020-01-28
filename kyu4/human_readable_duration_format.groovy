class Kata {
  static String formatDuration(seconds){
  
      if (seconds == 0) { return "now"; }
      
      def s = seconds%60;
      def m = seconds.intdiv(60);
      
      def h = m.intdiv(60);  m = m%60;
      def d = h.intdiv(24);  h = h%24;
      def y = d.intdiv(365); d = d%365;
      
      def (fo, no, t) = [[], "", [y,d,h,m,s]];
      def to =["year", "day", "hour", "minute", "second"];
      
      for (def i = 0; i < 5; i++){
          if (t[i]>1)       { fo << (t[i] + " " + to[i] + "s"); }
          else if (t[i]==1) { fo << (t[i] + " " + to[i]); }
      }
      
      for (def j = 0; j < fo.size(); j++){
          if (j == fo.size() - 1)      { no += fo[j]; }
          else if (j == fo.size() - 2) { no += fo[j] + " and "; }
          else                         { no += fo[j] + ", "; }
      }
      return no;
  }
}