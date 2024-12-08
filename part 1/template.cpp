#include <bits/stdc++.h>
using namespace std;
typedef long long ll;
typedef long double db;
const ll MOD = 1e9 + 7;
const ll NMAX = 1e18;
#define all(x) x.begin(), x.end()
#define fori(i, a, b) for (ll i = a; i < b; i++)
#define endl "\n"
#define vi vector<int>
#define vl vector<ll>
#define pb push_back
#define mp make_pair
#define mi map<int, int>
#define mll map<ll, ll>
#define yes cout << "YES" << endl;
#define no cout << "NO" << endl;




bool solve(string t )
{


    int n = t.size();
    int i = 0 , j = n-1 ;

    // Use to pointers to iterate and check lower case equality of chars
    while( i < j ) {
        // Ignore spaces and ponctuation marks
        if ( t[i]== '.' || t[i] =='?' || t[i]=='!' || t[i] ==',' || t[i]==';' || t[i]==':' || t[i]==' ') {
            i++;
            continue;
        }
        // Ignore spaces and ponctuation marks

        if ( t[j]== '.' || t[j] =='?' || t[j]=='!' || t[j] ==',' || t[i]==';' || t[i]==':' || t[i]==' ') {
            j--;
            continue;
        }


        if ( tolower(t[i]) != tolower(t[j])) 
            return false ;
        
        i++;
        j--;

    }

    return true ;

}

int main()
{
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    int tt = 1;
    //cin >> tt;
    string t ;
    cin >> t ;
    if (solve(t))
        cout << "True" << endl ;
    else 
        cout << "False" << endl ;
}