# Registering Metrics

[[toc]]

Once you have defined a metric, you are ready to attach it to a resource. Each resource generated by Nova contains a `cards` method. To attach a metric to a resource, you should simply add it to the array of metrics / cards returned by this method:

```php
/**
 * Get the cards available for the resource.
 *
 * @param  \Illuminate\Http\Request  $request
 * @return array
 */
public function cards(Request $request)
{
    return [new Metrics\UsersPerDay];
}
```

## Resource Detail Metrics

## Dashboard Metrics

You are not limited to displaying metrics on a resource's index screen. You are free to add metrics to your primary Nova "dashboard", which is the default page that Nova displays after login. By default, this screen displays some helpful links to the Nova documentation via the built-in `Help` card. To add a metric to your dashboard, add the metric to the array of cards returned by the `cards` method of your `app/Providers/NovaServiceProvider` class:

```php
use App\Nova\Metrics\NewUsers;

/**
 * Get the cards that should be displayed on the Nova dashboard.
 *
 * @return array
 */
protected function cards()
{
    return [
        new NewUsers,
    ];
}
```

## Metric Sizes

By default, metrics take up one-third of the Nova content area. However, you are free to make them larger. To accomplish this, call the `width` method when registering the metric with a resource:

```php
/**
 * Get the cards available for the request.
 *
 * @param  \Illuminate\Http\Request  $request
 * @return array
 */
public function cards(Request $request)
{
    return [
        // Two-thirds of the content area...
        (new Metrics\UsersPerDay)->width('2/3'),

        // Full width...
        (new Metrics\UsersPerDay)->width('full'),
    ];
}
```