<?php
require __DIR__ . "/model.php";
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
          integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    <link rel="stylesheet" href="fonts/font-awesome-4.7.0/css/font-awesome.min.css"/>
    <link rel="stylesheet" href="style.css"/>
</head>
<body>

<div class="container content">
    <div class="row">
        <div class="col-lg-12">
            <ul id="list" class="list-unstyled list-inline list text-center">
                <?php foreach (getItems(1, 4) as $item): ?>
                    <li class="list-item text-left">
                        <div class="item-img text-center">
                            <img src="<?php echo $item['img']; ?>" alt="<?php echo $item['title']; ?>">
                            <?php if ($item['discountCost'] !== null): ?>
                                <?php echo $item['cost']; ?>
                                <div class="label-sale text-uppercase">sale</div>
                            <?php endif; ?>
                            <?php if ($item['new']): ?>
                                <div class="label-new text-uppercase">new</div>
                            <?php endif; ?>
                        </div>
                        <div class="item-content">
                            <div class="description">
                                <p><strong class="title"><?php echo $item['title']; ?></strong></p>
                                <p><?php echo $item['description']; ?></p>
                            </div>
                            <p class="price">
                                <?php if ($item['discountCost']): ?>
                                    <span class="discount-price">$<?php echo number_format($item['discountCost'], 2); ?></span>
                                    <del class="old-price">$<?php echo number_format($item['cost'], 2); ?></del>
                                <?php else: ?>
                                    <span class="discount-price">$<?php echo number_format($item['cost'], 2); ?></span>
                                <?php endif; ?>
                            </p>
                            <div class="item-btns row">
                                <div class="col-lg-12">
                                    <button class="custom-btn btn-add text-uppercase">add to cart</button>
                                    <button class="custom-btn btn-view text-uppercase">view</button>
                                </div>
                            </div>
                        </div>
                    </li>
                <?php endforeach; ?>
            </ul>
        </div>
        <div class="col-lg-12 text-center">
            <button id="load-more" class="custom-btn btn-add text-uppercase">Load more</button>
        </div>
    </div>

    <div class="row info-block-wrapper">
        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
            <div class="info-block">
                <h3 class="text-uppercase title">hot offers</h3>
                <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. Suspendisse sollicitudin velit sed leo. Ut pharetra augue nec augue. Nam
                    elit magna, hend.rerit sit amet, tincidunt ac, viverra sed, nulla.
                </p>
                <ul class="list-unstyled offers">
                    <li>Vestibulum ante ipsum primis in faucibus orci luctus</li>
                    <li>Nam elit magna hendrerit sit amet tincidunt ac</li>
                    <li>Quisque diam lorem interdum vitae dapibus ac scele</li>
                    <li>Donec eget tellus non erat lacinia fermentum</li>
                    <li>Donec in velit vel ipsum auctor pulvin</li>
                </ul>
            </div>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
            <div class="info-block">
                <h3 class="text-uppercase title">hot offers</h3>
                <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. Suspendisse sollicitudin velit sed leo. Ut pharetra augue nec augue. Nam
                    elit magna, hend.rerit sit amet, tincidunt ac, viverra sed, nulla.
                </p>
                <ul class="list-unstyled offers">
                    <li>Vestibulum ante ipsum primis in faucibus orci luctus</li>
                    <li>Nam elit magna hendrerit sit amet tincidunt ac</li>
                    <li>Quisque diam lorem interdum vitae dapibus ac scele</li>
                    <li>Donec eget tellus non erat lacinia fermentum</li>
                    <li>Donec in velit vel ipsum auctor pulvin</li>
                </ul>
            </div>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
            <div class="info-block">
                <h3 class="text-uppercase title">store information</h3>
                <address>
                    <ul class="list-unstyled address">
                        <li>
                            <span class="address-icon">
                                <i class="fa fa-map-marker" aria-hidden="true"></i>
                            </span>
                            <span>Company Inc., 8901 Marmora Road, Glasgow, D04 89GR</span>
                        </li>
                        <li>
                            <span class="address-icon">
                                <i class="fa fa-phone" aria-hidden="true"></i>
                            </span>
                            <span>Call us now toll free: <a href="tel:(800) 2345-6789">(800) 2345-6789</a></span>
                        </li>
                        <li>
                            <span class="address-icon">
                                <i class="fa fa-envelope-o" aria-hidden="true"></i>
                            </span>
                            <span>
                                Customer support: <a href="mailto:support@example.com">support@example.com</a>
                                <br/>
                                Press: <a href="mailto:pressroom@example">pressroom@example</a>.
                            </span>
                        </li>
                        <li>
                            <span class="address-icon">
                                  <i class="fa fa-skype" aria-hidden="true"></i>
                            </span>
                            <span>Skype: <a href="skype?chat">sample-username</a></span>
                        </li>
                    </ul>
                </address>
            </div>
        </div>
    </div>
</div>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script src="scripts.js"></script>
</body>
</html>